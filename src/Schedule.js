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
                <h1 className={classes.active}>Расписание</h1>
                <h1><a href="/edit">Редактирование</a></h1>
            </div>
        )
    }

}
