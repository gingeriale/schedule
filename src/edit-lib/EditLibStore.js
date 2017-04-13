import {observable, action} from 'mobx'
import {parse} from 'date-fns'

import amountDetails from 'edit-lib/amountDetails'
import roomsDetails from 'edit-lib/roomsDetails'
import schoolsDetails from 'edit-lib/schoolsDetails'
import EditStore from 'schedule-app/edit/EditStore'
import checkRoomCapacity from 'edit-lib/checkRoomCapacity'
import checkSchoolLoading from 'edit-lib/checkSchoolLoading'
import checkRoomLoading from 'edit-lib/checkRoomLoading'

/**
 * стор для хранения и обработки информации, необходимой для редактирования и добавления данных в расписание для задания 2.
 * @param {ObservableMap} schoolsInfo - мапа, создаваемая из информации о лекциях
 * @param {ObservableMap.<string, string, string, string, Object>} lectureOfSchool
 * @param {string} editingLectureOfSchool
 * @param {boolean} addingLectureState
 * @param {Object.<string, string, string, string, Object>} addingLectureItem
 * @error {ObservableArray<boolean>} error
 */

class EditLibStore {

    /**
     * информация о лекциях
     * @public
     */
    @observable
    schoolsInfo = observable.map(schoolsDetails)

    /**
     * данные о редактируемой лекции
     * @public
     */
    @observable
    lectureOfSchool = null

    /**
     * тема редактируемой лекции
     * @public
     */
    @observable
    editingLectureOfSchool = null

    /**
     * нахождение в состоянии добавления лекции
     * @public
     */
    @observable
    addingLectureState = false

    /**
     * данные о добавляемой лекции
     * @public
     */
    @observable
    addingLectureItem = {}

    /**
     * @public
     */
    @observable
    error = observable.shallowArray([])

    /**
     * @param  {} lecture
     */
    @action
    setLectureOfSchoolEdit(lecture) {
        this.clearError()
        this.lectureOfSchool = observable.map(lecture)
        this.editingLectureOfSchool = this.lectureOfSchool.get('theme')
    }

    /**
     * очистка массива ошибок
     */
    @action
    clearError() {
        this.error.clear()
    }

    /**
     * отмена редактирования лекции.
     * сброс значения полей информации и темы редактируемой школы.
     */
    @action
    cancelEditingLecture() {
        this.lectureOfSchool = null
        this.editingLectureOfSchool = null
    }

    /**
     * внесение новых значений данных о редактируемой лекции из инпута в соответствующее поле.
     * @param  {string} lectureInfoItem
     * @param  {string} value
     */
    @action
    editLectureOfSchool(lectureInfoItem, value) {
        this.lectureOfSchool.set(lectureInfoItem, value)
    }

    /**
     * сохранение отредактированной лекции.
     * находим в информации о лекциях редактируемую по ее теме.
     * проверяем выполнение всех условий для успешного редактирования.
     * если выполнено - обновляем информацию о лекции.
     * если не выполнено - отменяем редактирование.
     */
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

    /**
     * изменение факта добавления лекции.
     * при прекращении добавления - вызываем метод добавления лекции и информацию о лекциях
     */
    @action
    changeAddingLectureState() {
        this.addingLectureState = !this.addingLectureState
        if (!this.addingLectureState) {
            this.addLecture()
        }
    }

    /**
     * отмена добавления лекции, сброс значений полей информации о добавляемой лекции и факта добавления лекции
     */
    @action
    cancelAddingLecture() {
        this.addingLectureState = false
        this.addingLectureItem = {}
    }

    /**
     * внесение новых значений данных о добавляемой лекции из инпута в соответствующее поле.
     * @param {string} info 
     * @param {string} value 
     */
    @action
    addLectureInfo(info, value) {
        this.addingLectureItem[info] = value
    }

    /**
     * добавление лекции в информацию о лекциях.
     * отменяем добавление, если заполнены не все инпуты, необходимые для добавления.
     * проверяем выполнение условий, необходимых для добавления лекции.
     * если выполнено - добавляем, если нет - отмена добавления.
     */
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

    /**
     * получаем дату из строк даты и времени лекции при редактировании
     * @return {Object}
     */
    getDateFromDateTimeViewEdit() {
        return parse(`${this.lectureOfSchool.get('dateView')}T${this.lectureOfSchool.get('timeView')}`)
    }

    /**
     * получаем дату из строк даты и времени лекции при добавлении
     * @return {Object}
     */
    getDateFromDateTimeViewAdd() {
        return parse(`${this.addingLectureItem.dateView}T${this.addingLectureItem.timeView}`)
    }

}

export default new EditLibStore()