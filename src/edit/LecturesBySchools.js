import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'
import {findLecturesBySchool} from 'edit-lib/findLectures'
import EditLibStore from 'edit-lib/EditLibStore'

@observer
export default class LecturesBySchools extends Component {

    render() {
        const foundLectures = findLecturesBySchool(EditStore.school, EditStore.beginToShow, EditStore.endToShow)
        return (
            <div>
                <div>
                    По умолчанию показываются все лекции школы. 
                    Выберите даты и нажмите "показать" для выбора расписания школы за 
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
                                            {EditLibStore.editingLectureOfSchool === lecture.theme ? (
                                                <input
                                                    type="text"
                                                    value={EditLibStore.lectureOfSchool.get(lectureInfoItem)}
                                                    onInput={event => EditLibStore.editLectureOfSchool(lectureInfoItem, event.target.value)}
                                                />
                                            ) : (
                                                lecture[lectureInfoItem]
                                            )}
                                        </td>
                                    )
                                })}
                                <td>
                                    <button onClick={() => EditLibStore.setLectureOfSchoolEdit(lecture)}>редактировать</button>
                                </td>
                                <td>
                                    <button onClick={() => EditLibStore.saveLectureOfSchool()}>сохранить</button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }

}
