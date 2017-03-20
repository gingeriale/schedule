import Component from 'inferno-component'
import jss from 'jss'
import cn from 'classnames'

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            activeSchedule: true,
            activeEdit: false
        }
    }

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        const {
            activeSchedule,
            activeEdit
        } = this.state

        return (
            <div>
                <a 
                    href="/schedule"
                    onClick={() => this.setState({
                        activeSchedule: true,
                        activeEdit: false
                    })}
                >
                    <span className={cn(`${classes.header}`, {[classes.active]: activeSchedule})}>
                        Расписание
                    </span>
                </a>
                <a 
                    href="/edit"
                    onClick={() => this.setState({
                        activeSchedule: false,
                        activeEdit: true
                    })}
                >
                    <span className={cn(`${classes.header}`, {[classes.active]: activeEdit})}>
                        Редактирование
                    </span>
                </a>
            </div>
        )
    }

}

const styles = {
    header: {
        color: 'green'
    },
    active: {
        'color': 'red'
    }
}
