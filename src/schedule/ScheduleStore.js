import {observable, action} from 'mobx'

import Schools from 'schedule-app/schedule/Schools'
import schoolsDetails from 'edit-lib/schoolsDetails'

/**
 * стор хранит и обрабатывает информацию, необходимую для корректного рендера расписания занятий
 * @param {string} school
 * @param {boolean} speakerInfoVisible
 * @param {ObservableMap.<number, number, boolean>} speakerInfoCoord
 */

class ScheduleStore {
    
    /** 
     * выбранная школа для отображения расписания
     * @public 
     * */
    @observable 
    school = Schools.INTERFACE

    /** 
     * видимость окна с информацией о спикере
     * @public 
     * */
    @observable
    speakerInfoVisible = false

    /**
     * координаты для отображения инфо о спикере и элемент, на котором сработало событие отображения
     * @public 
     * */
    @observable
    speakerInfoCoord = observable.map({
        pageX: 0,
        pageY: 0,
        target: null
    })

    /**
     * метод изменения состояния поля выбранной для отображения школы
     * сетит в поле полученное значение
     * @param  {string} school
     */
    @action
    showSchool(school) {
        this.school = school
    }

    /**
     * метод для обработки информации об отображении окна с информацией о спикере
     * сетит координаты и элемент в соответствующее поле, если окно не отображено
     * если окно отображено, проверяет, что событие произошло на имени нужного спикера и скрывает окно
     * @param  {EventObject} event
     */
    @action
    changeSpeakerInfoVisible(event) {
        if (!this.speakerInfoVisible) {
            this.speakerInfoCoord.set('pageX', event.pageX)
            this.speakerInfoCoord.set('pageY', event.pageY)
            this.speakerInfoCoord.set('target', event.target)
            this.speakerInfoVisible = true
        }
        else {
            if (event.target === this.speakerInfoCoord.get('target')) {
                this.speakerInfoVisible = false
            }
        }
    }

}

export default new ScheduleStore()
