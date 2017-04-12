import Component from 'inferno-component'
import {Link} from 'inferno-router'
import jss from 'jss'
import cn from 'classnames'

import AppStore from 'schedule-app/common/AppStore'
import HeaderItems from 'schedule-app/common/HeaderItems'

export default class Header extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        const routePart = window.location.href.slice(-4)
        return (
            <div className={classes.header}>
                <Link 
                    to="./"
                    onClick={() => AppStore.setHeader(HeaderItems.SCHEDULE)}
                >
                    <div className={cn(`${classes.headerItem}`, {[classes.active]: routePart === 'le/#/'})}>
                        Расписание
                    </div>
                </Link>
                <Link 
                    to="/edit"
                    onClick={() => AppStore.setHeader(HeaderItems.EDIT)}
                >
                    <div className={cn(`${classes.headerItem}`, {[classes.active]: routePart === 'edit'})}>
                        Редактирование
                    </div>
                </Link>
            </div>
        )
    }

}

const styles = {
    header: {
        'margin-bottom': '35px',
        'font-family': "Menlo, Monaco, monospace"
    },
    headerItem: {
        display: 'inline-block',
        width: '185px',
        color: '#2f2f2f',
        'text-align': 'center',
        'font-size': '20px'
    },
    active: {
        color: '#060606',
        'background-color': '#c7c7c7',
        'border-radius': '5px'
    }
}
