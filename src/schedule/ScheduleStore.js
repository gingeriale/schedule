import {observable, action} from 'mobx'

import Schools from 'schedule-app/schedule/Schools'
import schoolsDetails from 'edit-lib/schoolsDetails'

class ScheduleStore {

    @observable 
    school = Schools.INTERFACE

    @action
    showSchool(school) {
        this.school = school
    }

}

export default new ScheduleStore()
