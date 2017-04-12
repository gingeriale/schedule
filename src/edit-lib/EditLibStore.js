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
        this.error.clear()
        this.lectureOfSchool = observable.map(lecture)
        this.editingLectureOfSchool = this.lectureOfSchool.get('theme')
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
        if (!checkSchoolLoading(EditStore.school, this.getDateFromDateTimeView(), editedLecture)) {
            this.error.push('у школы уже есть лекция в это время')
        }
        if (!checkRoomLoading(EditStore.school, this.lectureOfSchool.get('room'), this.getDateFromDateTimeView(), editedLecture)) {
            this.error.push('в аудитории уже есть лекция в это время')
        }
        console.log(this.error, this.error.length)
        console.log('roomCapacity', checkRoomCapacity(EditStore.school, this.lectureOfSchool.get('room')))
        console.log('schoolLoading', checkSchoolLoading(EditStore.school, this.getDateFromDateTimeView(), editedLecture))
        console.log('roomLoading', checkRoomLoading(EditStore.school, this.lectureOfSchool.get('room'), this.getDateFromDateTimeView(), editedLecture))
        editedSchool[editedLecture].room = this.lectureOfSchool.get('room')
        editedSchool[editedLecture].theme = this.lectureOfSchool.get('theme')
        editedSchool[editedLecture].dateView = this.lectureOfSchool.get('dateView')
        editedSchool[editedLecture].timeView = this.lectureOfSchool.get('timeView')
        editedSchool[editedLecture].date = this.getDateFromDateTimeView()
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
    }

    getDateFromDateTimeView() {
        return parse(`${this.lectureOfSchool.get('dateView')}T${this.lectureOfSchool.get('timeView')}`)
    }

}

export default new EditLibStore()