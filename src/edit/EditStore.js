import {observable, action} from 'mobx'

import roomsDetails from 'edit-lib/roomsDetails'

class EditStore {

    @observable
    room = roomsDetails.blue

    @observable
    begin = ''

    @observable
    end = ''

    @action
    changeRoomSelection(room) {
        this.room = roomsDetails[room]
    }

    @action
    onBeginChange(value) {
        this.begin = value
    }

    @action
    onEndChange(value) {
        this.end = value
    }

}

export default new EditStore()