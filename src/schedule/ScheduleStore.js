import {observable, action} from 'mobx'

import Schools from 'schedule-app/schedule/Schools'
import schoolsDetails from 'edit-lib/schoolsDetails'

class ScheduleStore {

    @observable 
    school = Schools.INTERFACE

    @observable
    speakerInfoVisible = false

    @observable
    speakerInfoCoord = observable.map({
        pageX: 0,
        pageY: 0
    })

    @action
    showSchool(school) {
        this.school = school
    }

    @action
    changeSpeakerInfoVisible(event) {
        if (!this.speakerInfoVisible) {
            this.speakerInfoCoord.set('pageX', event.pageX)
            this.speakerInfoCoord.set('pageY', event.pageY)
        }
        this.speakerInfoVisible = !this.speakerInfoVisible
    }

}

export default new ScheduleStore()
