import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'
import {findLecturesBySchool} from 'edit-lib/findLectures'

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
