import {observable, action} from 'mobx'

import roomsDetails from 'edit-lib/roomsDetails'
import Schools from 'schedule-app/schedule/Schools'
import tabs from 'schedule-app/edit/Tabs'


/**
 * стор для хранения и обработки информации, необходимой для корректного отображения
 * веб-интерфейса для задания 2
 * @param {string} tab
 * @param {Object} room
 * @param {string} school
 * @param {string} begin
 * @param {string} end
 * @param {string} beginToShow
 * @param {string} endToShow
 */

class EditStore {

    /**
     * название состояния отображения фильтрации (школа или аудитория)
     * @public
     */
    @observable
    tab = tabs.SCHOOL

    /**
     * выбранная аудитория
     * @public
     * 
     * @param {string} name
     * @param {number} capacity
     * @param {string} location
     */ 
    @observable
    room = roomsDetails.blue

    /**
     * выбранная школа
     * @public
     */
    @observable
    school = Schools.INTERFACE

    /**
     * значение инпута ввода даты начала фильтрации
     * @public
     */
    @observable
    begin = ''

    /**
     * значение инпута ввода даты окончания фильтрации
     * @public
     */
    @observable
    end = ''

    /**
     * поле даты начала фильтрации для срабатывания рендера таблицы
     * @public
     */
    @observable
    beginToShow = ''

    /**
     * поле даты окончания фильтрации для срабатывания рендера таблицы
     * @public
     */
    @observable
    endToShow = ''

    /**
     * @param  {string} tab
     */
    @action
    changeTab(tab) {
        this.tab = tabs[tab]
    }

    /**
     * срабатывает на селекте выбора аудитории, сетит новую аудиторию для отображения
     * @param  {string} room
     */
    @action
    changeRoomSelection(room) {
        this.room = roomsDetails[room]
    }

    /**
     * срабатывает на селекте выбора школы, сетит новую школу для отображения
     * @param  {string} school
     */
    @action
    changeSchoolSelection(school) {
        this.school = Schools[school]
    }

    /**
     * срабатывает на инпуте ввода даты начала фильтрации, сетит значение инпута
     * @param  {string} value
     */
    @action
    onBeginChange(value) {
        this.begin = value
    }

    /**
     * срабатывает на инпуте ввода даты окончания фильтрации, сетит значение инпута
     * @param  {string} value
     */
    @action
    onEndChange(value) {
        this.end = value
    }

    /**
     * срабатывает на кнопке инициации фильрации, сетит значения дат в поля для ререндера таблиц
     */
    @action
    showByBeginEnd() {
        this.beginToShow = this.begin
        this.endToShow = this.end
    }

}

export default new EditStore()