import Component from 'inferno-component'
import {observer} from 'inferno-mobx'

import EditStore from 'schedule-app/edit/EditStore'
import roomsDetails from 'edit-lib/roomsDetails'
import findLectures from 'edit-lib/findLectures'

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
                                value={room}>{roomsDetails[room].name}
                            </option>
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
                    <div onClick={() => EditStore.showByBeginEnd()}>Показать</div>
                    {this.renderLectures()}
                </div>
            </div>
        )
    }

    renderLectures() {
        const foundLectures = findLectures(EditStore.room.name, EditStore.beginToShow, EditStore.endToShow)
        return (
            <div>
                <div>
                    По умолчанию показываются все лекции аудитории. 
                    Выберите даты и нажмите "показать" для выбора расписания аудитории за 
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
