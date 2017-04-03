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
    lectureOfSchool = null

    @action
    setLectureOfRoomEdit(lecture) {
        this.lectureOfRoom = observable.map(lecture)
    }

    @action
    editLectureOfRoom(lectureInfoItem, value) {
        this.lectureOfRoom.set(lectureInfoItem, value)
        console.log(this.lectureOfRoom)
    }

    @action
    saveLectureOfRoom() {
        const edited = this.schoolsInfo.get(this.lectureOfRoom.get('school'))
        this.lectureOfRoom = null
    }

}

export default new EditLibStore()