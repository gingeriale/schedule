import Component from 'inferno-component'
import jss from 'jss'
import {observer} from 'inferno-mobx'

import ScheduleStore from 'schedule-app/schedule/ScheduleStore'
import Schools from 'schedule-app/schedule/Schools'
import EditLibStore from 'edit-lib/EditLibStore'
import isLecturePast from 'schedule-app/schedule/isLecturePast'

@observer
export default class Table extends Component {

    render() {
        return (
            <div>
                <span onClick={() => ScheduleStore.showSchool(Schools.INTERFACE)}>Interface</span>
                <span onClick={() => ScheduleStore.showSchool(Schools.MOBILE)}>Mobile</span>
                <span onClick={() => ScheduleStore.showSchool(Schools.DESIGN)}>Design</span>
                <div>
                    {ScheduleStore.school === Schools.INTERFACE ? (
                        this.renderContent(Schools.INTERFACE)
                    ) : ScheduleStore.school === Schools.MOBILE ? (
                        this.renderContent(Schools.MOBILE)
                    ) : (
                        this.renderContent(Schools.DESIGN)
                    )}
                </div>
            </div>
        )
    }

    renderContent(school) {
        const content = EditLibStore.schoolsInfo.get(school)
        return (
            <table>
                {Object.keys(content).map(lecture => {
                    return (
                        <tr>
                            <td>{content[lecture].common ? (
                                    'общая лекция'
                                ) : (
                                    null
                                )}
                            </td>
                            <td>{content[lecture].theme}</td>
                            <td>{content[lecture].speaker}</td>
                            <td>{content[lecture].room}</td>
                            <td>
                                {isLecturePast(content[lecture].date) ? (
                                    <a target="_blank" href={content[lecture].materials}>материалы</a>
                                ) : (
                                    content[lecture].dateView
                                )}
                            </td>
                            <td>
                                {isLecturePast(content[lecture].date) ? (
                                    <a target="_blank" href={content[lecture].video}>видео</a>
                                ) : (
                                    content[lecture].timeView
                                )}
                            </td>
                        </tr>
                    )
                })}
            </table>
        )
    }

}
