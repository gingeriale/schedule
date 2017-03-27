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
                            <option 
                                selected={roomsDetails[room].name === EditStore.room.name} 
                                value={room}
                            >
                                {roomsDetails[room].name}
                            </option>
                        )
                    })}              
                </select>
            </div>
        )
    }

}