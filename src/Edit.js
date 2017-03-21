import Component from 'inferno-component'
import jss from 'jss'

import Header from 'schedule-app/common/Header'

const styles = {
    active: {
        color: 'red'
    }
}

export default class Schedule extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()

        return (
            null
        )
    }

}
