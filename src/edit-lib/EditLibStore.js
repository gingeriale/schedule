import {observable, action} from 'mobx'

import amountDetails from 'edit-lib/AmountDetails'
import roomsDetails from 'edit-lib/roomsDetails'
import schoolsDetails from 'edit-lib/schoolsDetails'

class EditLibStore {

    @observable
    schoolsInfo = observable.map(schoolsDetails)

    @observable
    lectureOfRoom = null

    @observable
    editingLectureOfRoom = null

    @observable
    lectureOfSchool = null

    @action
    setLectureOfRoomEdit(lecture) {
        this.lectureOfRoom = observable.map(lecture)
        this.editingLectureOfRoom = this.lectureOfRoom.get('theme')
    }

    @action
    editLectureOfRoom(lectureInfoItem, value) {
        this.lectureOfRoom.set(lectureInfoItem, value)
        console.log(this.lectureOfRoom)
    }

    @action
    saveLectureOfRoom() {
        this.lectureOfRoom = null
        this.editingLectureOfRoom = null
    }

}

export default new EditLibStore()