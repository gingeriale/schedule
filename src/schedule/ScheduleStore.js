import {observable, action} from 'mobx'

import Schools from './Schools'

class ScheduleStore {

    @observable 
    school = Schools.INTERFACE

    @action
    showSchool(school) {
        this.school = school
    }

}

export default new ScheduleStore()
