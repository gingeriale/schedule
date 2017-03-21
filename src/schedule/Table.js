import Component from 'inferno-component'
import jss from 'jss'
import {observer} from 'inferno-mobx'

import ScheduleStore from 'schedule-app/schedule/ScheduleStore'
import Schools from 'schedule-app/schedule/Schools'

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
                        <div>interface</div>
                    ) : ScheduleStore.school === Schools.MOBILE ? (
                        <div>mobile</div>
                    ) : (
                        <div>design</div>
                    )}
                </div>
            </div>
        )
    }

}
