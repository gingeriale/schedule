import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'
import roomsDetails from 'edit-lib/roomsDetails'

@observer
export default class Rooms extends Component {

    render() {
        return (
            <div>
                <span>Выберите аудиторию</span>
                <select onChange={event => EditStore.changeRoomSelection(event.target.value)}>
                    {Object.keys(roomsDetails).map(room => {
                        return (
                            <option value={room}>{roomsDetails[room].name}</option>
                        )
                    })}              
                </select>
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
                    <div>Показать</div>
                </div>
            </div>
        )
    }

}
