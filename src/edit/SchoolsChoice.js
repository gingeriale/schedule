import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'

import EditStore from 'schedule-app/edit/EditStore'
import Schools from 'schedule-app/schedule/Schools'
import tabs from 'schedule-app/edit/Tabs'

@observer
export default class SchoolsChoice extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()      
        return (
            <div className={classes.choice}>
                <div className={classes.choiceText}>Выберите школу</div>
                <select 
                    onChange={event => EditStore.changeSchoolSelection(event.target.value)} 
                    className={classes.choiceSelect}
                >
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
                <button 
                    onClick={() => EditStore.changeTab(tabs.ROOM)} 
                    className={classes.choiceButton}
                >
                    К выбору аудитории
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
