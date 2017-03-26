import {observable, action} from 'mobx'

import roomsDetails from 'edit-lib/roomsDetails'

class EditStore {

    @observable
    room = roomsDetails.blue

    @action
    changeRoomSelection(room) {
        this.room = roomsDetails[room]
    }

}

export default new EditStore()