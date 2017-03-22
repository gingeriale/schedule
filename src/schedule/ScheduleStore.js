import {observable, action} from 'mobx'

import Schools from 'schedule-app/schedule/Schools'
import data from 'edit-lib/Data'

class ScheduleStore {

    @observable
    content = observable.map(data)

    @observable 
    school = Schools.INTERFACE

    @action
    showSchool(school) {
        this.school = school
    }

}

export default new ScheduleStore()
