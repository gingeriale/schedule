import Component from 'inferno-component'

import EditStore from 'schedule-app/edit/EditStore'
import roomsDetails from 'edit-lib/roomsDetails'

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
                    <input type="text"/>
                    <span>Введите конечную дату в формате "ДД.ММ"</span>
                    <input type="text"/>
                    <div>Показать</div>
                </div>
            </div>
        )
    }

}
