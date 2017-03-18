import Component from 'inferno-component'
import jss from 'jss'

const styles = {
    active: {
        color: 'red'
    }
}

export default class Schedule extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()

        return (
            <div>
                <h1><a href="/schedule">Расписание</a></h1>
                <h1 className={classes.active}>Редактирование</h1>
            </div>
        )
    }

}
