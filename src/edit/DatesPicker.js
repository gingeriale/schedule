import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'

import EditStore from 'schedule-app/edit/EditStore'

@observer
export default class DatesPicker extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        return (
            <div className={classes.picker}>
                <div>
                    <div className={classes.pickerDesc}>Введите начальную дату в формате "ДД.ММ"</div>
                    <input 
                        type="text"
                        value={EditStore.begin}
                        onInput={event => EditStore.onBeginChange(event.target.value)}
                    />
                </div>
                <div>
                    <div className={classes.pickerDesc}>Введите конечную дату в формате "ДД.ММ"</div>
                    <input
                        type="text"
                        value={EditStore.end}
                        onInput={event => EditStore.onEndChange(event.target.value)}
                    />
                </div>
                <div>
                    <button onClick={() => EditStore.showByBeginEnd()} className={classes.pickerButton}>Показать</button>
                </div>
            </div>
        )
    }

}

const styles = {
    picker: {
        'margin-bottom': '15px',
        'font-family': 'Menlo, Monaco, monospace'
    },
    pickerDesc: {
        display: 'inline-block',
        width: '400px'
    },
    pickerButton: {
        width: '80px',
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
