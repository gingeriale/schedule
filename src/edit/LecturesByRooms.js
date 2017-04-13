import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'

import EditStore from 'schedule-app/edit/EditStore'
import {findLecturesByRoom} from 'edit-lib/findLectures'
import EditLibStore from 'edit-lib/EditLibStore'

// рендер таблицы с отфильтрованными лекциями для выбранной аудитории

@observer
export default class LecturesByRooms extends Component {

    render () {
        const {classes} = jss.createStyleSheet(styles).attach()
        const foundLectures = findLecturesByRoom(EditStore.room.name, EditStore.beginToShow, EditStore.endToShow)
        return (
            <div className={classes.lectures}>
                <div className={classes.lecturesText}>
                    По умолчанию показываются все лекции аудитории. 
                    Выберите даты и нажмите "показать" для выбора расписания аудитории за 
                    интересующий промежуток времени.
                </div>
                <table>
                    {Object.keys(foundLectures).map(lectureId => {
                        const lecture = foundLectures[lectureId]
                        return (
                            <tr>
                                {Object.keys(lecture).map(lectureInfoItem => {
                                    return (
                                        <td>
                                            {lecture[lectureInfoItem]}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }    

}

const styles = {
    lectures: {
        'margin-top': '15px',
        'font-family': 'Menlo, Monaco, monospace'       
    },
    lecturesText: {
        'margin-bottom': '10px'
    }
}
