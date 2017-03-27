import {observable, action} from 'mobx'

import roomsDetails from 'edit-lib/roomsDetails'
import Schools from 'schedule-app/schedule/Schools'

class EditStore {

    @observable
    room = roomsDetails.blue

    @observable
    school = Schools.INTERFACE

    @observable
    begin = ''

    @observable
    end = ''

    @observable
    beginToShow = ''

    @observable
    endToShow = ''

    @action
    changeRoomSelection(room) {
        this.room = roomsDetails[room]
    }

    @action
    changeSchoolSelection(school) {
        this.school = Schools[school]
    }

    @action
    onBeginChange(value) {
        this.begin = value
    }

    @action
    onEndChange(value) {
        this.end = value
    }

    @action
    showByBeginEnd() {
        this.beginToShow = this.begin
        this.endToShow = this.end
    }

}

export default new EditStore()