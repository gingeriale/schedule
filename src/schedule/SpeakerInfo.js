import Component from 'inferno-component'
import jss from 'jss'
import nested from 'jss-nested'
import {observer} from 'inferno-mobx'

import ScheduleStore from 'schedule-app/schedule/ScheduleStore'

@observer
export default class SpeakerInfo extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        return (
            <div 
                className={classes.speaker} 
                style={{
                    top: `${ScheduleStore.speakerInfoCoord.get('pageY')+5}px`,
                    left: `${ScheduleStore.speakerInfoCoord.get('pageX')+5}px`
                }}
                onClick={event => ScheduleStore.changeSpeakerInfoVisible(event)}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        )
    }

}

const styles = {
    speaker: {
        display: 'inline-block',
        position: 'absolute',
        width: '250px',
        height: '100px',
        border: '2px solid #2f2f2f',
        'border-radius': '5px',
        background: '#d7c6be',
        'overflow-Y': 'scroll'
    }
}

jss.use(nested())
