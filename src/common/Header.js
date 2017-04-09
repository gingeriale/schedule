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
            <div className={classes.header}>
                <Link 
                    to="/schedule"
                    onClick={() => AppStore.setHeader(HeaderItems.SCHEDULE)}
                >
                    <div className={cn(`${classes.headerItem}`, {[classes.active]: AppStore.header === HeaderItems.SCHEDULE})}>
                        Расписание
                    </div>
                </Link>
                <Link 
                    to="/edit"
                    onClick={() => AppStore.setHeader(HeaderItems.EDIT)}
                >
                    <div className={cn(`${classes.headerItem}`, {[classes.active]: AppStore.header === HeaderItems.EDIT})}>
                        Редактирование
                    </div>
                </Link>
            </div>
        )
    }

}

const styles = {
    header: {
        'margin-bottom': '20px'
    },
    headerItem: {
        display: 'inline-block',
        width: '150px',
        color: '#708090',
        'text-align': 'center',
        'font-size': '20px'
    },
    active: {
        color: '#000',
        'background-color': 'C0C0C0',
        'border-radius': '5px'
    }
}
