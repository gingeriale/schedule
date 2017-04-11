import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'

import EditStore from 'schedule-app/edit/EditStore'
import roomsDetails from 'edit-lib/roomsDetails'
import tabs from 'schedule-app/edit/Tabs'

@observer
export default class Rooms extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        return (
            <div className={classes.choice}>
                <div className={classes.choiceText}>Выберите аудиторию</div>
                <select 
                    onChange={event => EditStore.changeRoomSelection(event.target.value)} 
                    className={classes.choiceSelect}
                >
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
                <button 
                    onClick={() => EditStore.changeTab(tabs.SCHOOL)} 
                    className={classes.choiceButton}
                >
                    К выбору школы
                </button>
            </div>
        )
    }

}

const styles = {
    choice: {
        'margin-right': '15px',
        'font-family': 'Menlo, Monaco, monospace'
    },
    choiceText: {
        display: 'inline-block',
        width: '200px'
    },
    choiceSelect: {
        width: '100px',
        height: '30px',
        'margin-left': '30px'
    },
    choiceButton: {
        width: '150px',
        height: '30px',
        'margin-top': '15px',
        'margin-left': '15px',
        background: '#ebcfb9',
        border: 'none',
        'border-radius': '5px',
        'text-align': 'center',
        'font-family': 'inherit',
        cursor: 'pointer'
    }
}
