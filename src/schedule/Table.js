import Component from 'inferno-component'
import jss from 'jss'
import {observer} from 'inferno-mobx'

import ScheduleStore from 'schedule-app/schedule/ScheduleStore'
import Schools from 'schedule-app/schedule/Schools'
import formatDateTime from 'schedule-app/common/util/formatDateTime'

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
        const content = ScheduleStore.content.get(school)
        const formattedContent = formatDateTime(content)
        return (
            <table>
                {Object.keys(formattedContent).map(lecture => {
                    return (
                        <tr>
                            {Object.keys(content[lecture]).map(info => {
                                return (
                                    <td>{content[lecture][info]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
        )
    }

}
