import {observable, action} from 'mobx'
import {parse} from 'date-fns'

import amountDetails from 'edit-lib/amountDetails'
import roomsDetails from 'edit-lib/roomsDetails'
import schoolsDetails from 'edit-lib/schoolsDetails'
import EditStore from 'schedule-app/edit/EditStore'
import checkRoomCapacity from 'edit-lib/checkRoomCapacity'
import checkSchoolLoading from 'edit-lib/checkSchoolLoading'
import checkRoomLoading from 'edit-lib/checkRoomLoading'

class EditLibStore {

    @observable
    schoolsInfo = observable.map(schoolsDetails)

    @observable
    lectureOfSchool = null

    @observable
    editingLectureOfSchool = null

    @observable
    addingLectureState = false

    @observable
    addingLectureItem = {}

    @observable
    error = observable.shallowArray([])

    @action
    setLectureOfSchoolEdit(lecture) {
        this.clearError()
        this.lectureOfSchool = observable.map(lecture)
        this.editingLectureOfSchool = this.lectureOfSchool.get('theme')
    }

    @action
    clearError() {
        this.error.clear()
    }

    @action
    cancelEditingLecture() {
        this.lectureOfSchool = null
        this.editingLectureOfSchool = null
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
        if (!checkRoomCapacity(EditStore.school, this.lectureOfSchool.get('room'))) {
            this.error.push('вместимость аудитории недостаточна')
        }
        if (!checkSchoolLoading(EditStore.school, this.getDateFromDateTimeViewEdit(), editedLecture)) {
            this.error.push('у школы уже есть лекция в это время')
        }
        if (!checkRoomLoading(EditStore.school, this.lectureOfSchool.get('room'), this.getDateFromDateTimeViewEdit(), editedLecture)) {
            this.error.push('в аудитории уже есть лекция в это время')
        }
        if (this.error.length !== 0) {
            this.cancelEditingLecture()
            return
        }
        editedSchool[editedLecture].room = this.lectureOfSchool.get('room')
        editedSchool[editedLecture].theme = this.lectureOfSchool.get('theme')
        editedSchool[editedLecture].dateView = this.lectureOfSchool.get('dateView')
        editedSchool[editedLecture].timeView = this.lectureOfSchool.get('timeView')
        editedSchool[editedLecture].date = this.getDateFromDateTimeViewEdit()
        this.cancelEditingLecture()
    }

    @action
    changeAddingLectureState() {
        this.addingLectureState = !this.addingLectureState
        if (!this.addingLectureState) {
            this.addLecture()
        }
    }

    @action
    cancelAddingLecture() {
        this.addingLectureState = false
        this.addingLectureItem = {}
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
        if (!checkRoomCapacity(EditStore.school, this.addingLectureItem.room)) {
            this.error.push('вместимость аудитории недостаточна')
        }
        if (!checkSchoolLoading(EditStore.school, this.getDateFromDateTimeViewAdd())) {
            this.error.push('у школы уже есть лекция в это время')
        }
        if (!checkRoomLoading(EditStore.school, this.addingLectureItem.room, this.getDateFromDateTimeViewAdd())) {
            this.error.push('в аудитории уже есть лекция в это время')
        }
        if (this.error.length !== 0) {
            this.cancelAddingLecture()
            return
        }
        const lectureId = Object.keys(editedSchool).length + 1
        editedSchool[lectureId] = this.addingLectureItem
        editedSchool[lectureId].date = this.getDateFromDateTimeViewAdd()
        this.cancelAddingLecture()
    }

    getDateFromDateTimeViewEdit() {
        return parse(`${this.lectureOfSchool.get('dateView')}T${this.lectureOfSchool.get('timeView')}`)
    }

    getDateFromDateTimeViewAdd() {
        return parse(`${this.addingLectureItem.dateView}T${this.addingLectureItem.timeView}`)
    }

}

export default new EditLibStore()