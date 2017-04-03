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
    }

    @action
    saveLectureOfRoom() {
        const editedSchool = this.schoolsInfo.get(this.lectureOfRoom.get('school'))
        const editedLecture = Object.keys(editedSchool).find(lecture => {
            return editedSchool[lecture].theme === this.editingLectureOfRoom
        })
        console.log(editedLecture)
        editedSchool[editedLecture].theme = this.lectureOfRoom.get('theme')
        console.log(editedSchool)
        this.schoolsInfo.set(this.lectureOfRoom.get('school'), editedSchool)
        console.log('edited', this.schoolsInfo)
        this.lectureOfRoom = null
        this.editingLectureOfRoom = null
    }

}

export default new EditLibStore()