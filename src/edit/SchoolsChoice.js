import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'
import Schools from 'schedule-app/schedule/Schools'
import tabs from 'schedule-app/edit/Tabs'

@observer
export default class SchoolsChoice extends Component {

    render() {
        return (
            <div>
                <span>Выберите школу</span>
                <select onChange={event => EditStore.changeSchoolSelection(event.target.value)}>
                    {Object.keys(Schools).map(school => {
                        return (
                            <option
                                selected={Schools[school] === EditStore.school}
                                value={Schools[school]}
                            >
                                {Schools[school]}
                            </option>
                        )
                    })}
                </select>
                <button onClick={() => EditStore.changeTab(tabs.ROOM)}>К выбору аудитории</button>
            </div>
        )
    }

}
