import {observable, action} from 'mobx'
import {parse} from 'date-fns'

import amountDetails from 'edit-lib/AmountDetails'
import roomsDetails from 'edit-lib/roomsDetails'
import schoolsDetails from 'edit-lib/schoolsDetails'
import EditStore from 'schedule-app/edit/EditStore'

class EditLibStore {

    @observable
    schoolsInfo = observable.map(schoolsDetails)

    @observable
    lectureOfRoom = null

    @observable
    editingLectureOfRoom = null

    @observable
    lectureOfSchool = null

    @observable
    editingLectureOfSchool = null

    @observable
    addingLectureState = false

    @observable
    addingLectureItem = {}

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
        editedSchool[editedLecture].theme = this.lectureOfRoom.get('theme')
        editedSchool[editedLecture].dateView = this.lectureOfRoom.get('dateView')
        editedSchool[editedLecture].timeView = this.lectureOfRoom.get('timeView')
        editedSchool[editedLecture].date = parse(`${this.lectureOfRoom.get('dateView')}T${this.lectureOfRoom.get('timeView')}`)
        this.lectureOfRoom = null
        this.editingLectureOfRoom = null
    }

    @action
    setLectureOfSchoolEdit(lecture) {
        this.lectureOfSchool = observable.map(lecture)
        this.editingLectureOfSchool = this.lectureOfSchool.get('theme')
    }

    @action
    editLectureOfSchool(lectureInfoItem, value) {
        this.lectureOfSchool.set(lectureInfoItem, value)
    }

    @action
    saveLectureOfSchool() {
        const editedSchool = this.schoolsInfo.get(EditStore.school)
        const editedLecture = Object.keys(editedSchool).find(lecture => {
            return editedSchool[lecture].theme === this.editingLectureOfSchool
        })
        editedSchool[editedLecture].theme = this.lectureOfSchool.get('theme')
        editedSchool[editedLecture].dateView = this.lectureOfSchool.get('dateView')
        editedSchool[editedLecture].timeView = this.lectureOfSchool.get('timeView')
        editedSchool[editedLecture].date = parse(`${this.lectureOfSchool.get('dateView')}T${this.lectureOfSchool.get('timeView')}`)
        this.lectureOfSchool = null
        this.editingLectureOfSchool = null
    }

    @action
    changeAddingLectureState() {
        if (this.addingLectureState) {
            this.addLecture()
            this.addingLectureItem = {}
        }
        this.addingLectureState = !this.addingLectureState
    }

    @action
    cancelAddingLecture() {
        this.addingLectureItem = {}
        this.addingLectureState = false
    }

    @action
    addLectureInfo(info, value) {
        this.addingLectureItem[info] = value
    }

    @action
    addLecture() {
        if (Object.keys(this.addingLectureItem).length !== 4) {
            return
        }
        const editedSchool = this.schoolsInfo.get(EditStore.school)
        const lectureId = Object.keys(editedSchool).length + 1
        
        editedSchool[lectureId] = this.addingLectureItem
        editedSchool[lectureId].date = parse(`${this.addingLectureItem.dateView}T${this.addingLectureItem.timeView}`)
        console.log(this.schoolsInfo)
    }

}

export default new EditLibStore()