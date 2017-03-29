import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'
import {findLecturesByRoom} from 'edit-lib/findLectures'
import EditLibStore from 'edit-lib/EditLibStore'

@observer
export default class LecturesByRooms extends Component {

    render () {
        const foundLectures = findLecturesByRoom(EditStore.room.name, EditStore.beginToShow, EditStore.endToShow)
        return (
            <div>
                <div>
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
                                            {EditLibStore.lectureOfRoom && EditLibStore.lectureOfRoom.get('theme') === lecture.theme ? (
                                                <input
                                                    type="text"
                                                    //todo change to schdetailsmap 
                                                    // and to rewrite find lectures
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
                                    <button onClick={() => EditLibStore.setLectureOfRoomEdit(lecture)}>редактировать</button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }    

}
