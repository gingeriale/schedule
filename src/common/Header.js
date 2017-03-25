import Component from 'inferno-component'
import {Link} from 'inferno-router'
import jss from 'jss'
import cn from 'classnames'

import AppStore from 'schedule-app/common/AppStore'
import HeaderItems from 'schedule-app/common/HeaderItems'

export default class Header extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()

        return (
            <div>
                <Link 
                    to="/schedule"
                    onClick={() => AppStore.setHeader(HeaderItems.SCHEDULE)}
                >
                    <span className={cn(`${classes.header}`, {[classes.active]: AppStore.header === HeaderItems.SCHEDULE})}>
                        Расписание
                    </span>
                </Link>
                <Link 
                    to="/edit"
                    onClick={() => AppStore.setHeader(HeaderItems.EDIT)}
                >
                    <span className={cn(`${classes.header}`, {[classes.active]: AppStore.header === HeaderItems.EDIT})}>
                        Редактирование
                    </span>
                </Link>
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
