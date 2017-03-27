import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'

@observer
export default class DatesPicker extends Component {

    render() {
        return (
            <div>
                <span>Введите начальную дату в формате "ДД.ММ"</span>
                <input 
                    type="text"
                    value={EditStore.begin}
                    onInput={event => EditStore.onBeginChange(event.target.value)}
                />
                <span>Введите конечную дату в формате "ДД.ММ"</span>
                <input
                    type="text"
                    value={EditStore.end}
                    onInput={event => EditStore.onEndChange(event.target.value)}
                />
                <div onClick={() => EditStore.showByBeginEnd()}>Показать</div>
            </div>
        )
    }

}
