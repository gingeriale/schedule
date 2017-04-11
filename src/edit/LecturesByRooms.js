import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'

import EditStore from 'schedule-app/edit/EditStore'
import {findLecturesByRoom} from 'edit-lib/findLectures'
import EditLibStore from 'edit-lib/EditLibStore'

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
                                            {EditLibStore.editingLectureOfRoom === lecture.theme ? (
                                                <input
                                                    type="text"
                                                    value={EditLibStore.lectureOfRoom.get(lectureInfoItem)}
                                                    onInput={event => EditLibStore.editLectureOfRoom(lectureInfoItem, event.target.value)}
                                                />
                                            ) : (
                                                lecture[lectureInfoItem]
                                            )}
                                        </td>
                                    )
                                })}
                                <td>
                                    <button 
                                        onClick={() => EditLibStore.setLectureOfRoomEdit(lecture)}
                                        className={classes.lecturesButton}
                                    >
                                        редактировать
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        onClick={() => EditLibStore.saveLectureOfRoom()}
                                        className={classes.lecturesButton}
                                    >
                                        сохранить
                                    </button>
                                </td>
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
    },
    lecturesButton: {
        background: '#ebcfb9',
        border: 'none',
        'border-radius': '5px',
        'text-align': 'center',
        'font-family': 'inherit',
        cursor: 'pointer'
    }
}
