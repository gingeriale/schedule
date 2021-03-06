import Component from 'inferno-component'
import jss from 'jss'
import {observer} from 'inferno-mobx'
import cn from 'classnames'
import nested from 'jss-nested'

import ScheduleStore from 'schedule-app/schedule/ScheduleStore'
import Schools from 'schedule-app/schedule/Schools'
import EditLibStore from 'edit-lib/EditLibStore'
import isLecturePast from 'schedule-app/schedule/isLecturePast'
import SpeakerInfo from 'schedule-app/schedule/SpeakerInfo'

@observer
export default class Table extends Component {

// рендер переключалки между школами, расписания школы в зависимости от состояния переключалки, всплывающего окна с инфо о спикере

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        return (
            <div>
                <div 
                    onClick={() => ScheduleStore.showSchool(Schools.INTERFACE)}
                    className={cn(`${classes.schoolName}`, {[classes.activeSchoolName]: ScheduleStore.school === Schools.INTERFACE})}
                >
                    {Schools.INTERFACE}
                </div>
                <div 
                    onClick={() => ScheduleStore.showSchool(Schools.MOBILE)}
                    className={cn(`${classes.schoolName}`, {[classes.activeSchoolName]: ScheduleStore.school === Schools.MOBILE})}
                >
                    {Schools.MOBILE}
                </div>
                <div 
                    onClick={() => ScheduleStore.showSchool(Schools.DESIGN)}
                    className={cn(`${classes.schoolName}`, {[classes.activeSchoolName]: ScheduleStore.school === Schools.DESIGN})}
                >
                    {Schools.DESIGN}
                </div>
                <div>
                    {ScheduleStore.school === Schools.INTERFACE ? (
                        this.renderContent(Schools.INTERFACE)
                    ) : ScheduleStore.school === Schools.MOBILE ? (
                        this.renderContent(Schools.MOBILE)
                    ) : (
                        this.renderContent(Schools.DESIGN)
                    )}
                </div>
                {ScheduleStore.speakerInfoVisible ? (
                    <SpeakerInfo/>      
                ) : (
                    null
                )}
            </div>
        )
    }

    // метод получает название школы, достает из стора редактирования данные об этой школе и возвращает таблицу
    // с расписанием на основе полученных из стора данных.
    // при генерации таблицы проверяет, прошла ли лекция, и если да, то вместо даты и времени отображает ссылку на материалы.
    // на ячейку с именем спикера добавляет обработчик для отображения окна с инфой о нем.

    renderContent(school) {
        const {classes} = jss.createStyleSheet(styles).attach()
        const content = EditLibStore.schoolsInfo.get(school)
        return (
            <table className={classes.schoolTable}>
                {Object.keys(content).map(lecture => {
                    return (
                        <tr className={classes.schoolTableRow}>
                            <td className={classes.schoolTableCommonCell}>{content[lecture].common ? (
                                    <div className={classes.schoolTableCommon}>общая</div>
                                ) : (
                                    null
                                )}
                            </td>
                            <td className={classes.schoolTableTheme}>{content[lecture].theme}</td>
                            <td 
                                className={classes.schoolTableSpeaker}
                                onClick={event => ScheduleStore.changeSpeakerInfoVisible(event)}
                            >
                                {content[lecture].speaker}
                            </td>
                            <td className={classes.schoolTableRoom}>{content[lecture].room}</td>
                            <td className={classes.schoolTableDateTime}>
                                {isLecturePast(content[lecture].date) ? (
                                    <a target="_blank" href={content[lecture].materials}>материалы</a>
                                ) : (
                                    content[lecture].dateView
                                )}
                            </td>
                            <td className={classes.schoolTableDateTime}>
                                {isLecturePast(content[lecture].date) ? (
                                    <a target="_blank" href={content[lecture].video}>видео</a>
                                ) : (
                                    content[lecture].timeView
                                )}
                            </td>
                        </tr>
                    )
                })}
            </table>
        )
    }

}

const styles = {
    schoolName: {
        display: 'inline-block',
        width: '100px',
        'margin-bottom': '15px',
        color: '#060606',
        'text-align': 'center',
        'border-radius': '5px',
        '&:hover': {
            color: '#6d4546',
            cursor: 'pointer'
        },
        'font-family': 'Menlo, Monaco, monospace',
        'font-size': '16px',
        '@media screen and (max-device-width: 425px)': {
            width: '33%'
        }
    },
    activeSchoolName: {
        background: '#d7c6be',
        '&:hover': {
            color: '#060606'
        }
    },
    schoolTable: {
        width: '100%',
        color: '#060606',
        'border-collapse': 'collapse',
        'font-family': 'Menlo, Monaco, monospace',
        'font-size': '16px',
    },
    schoolTableCommonCell: {
        width: '50px',
        '@media screen and (max-device-width: 425px)': {
            display: 'block',
            width: '170px'
        }
    },
    schoolTableCommon: {
        width: '100%',
        background: '#2f2f2f',
        color: '#d7c6be',
        'text-align': 'center',
        'border-radius': '5px'
    },
    schoolTableSpeaker: {
        width: '15%',
        'padding-bottom': '2px',
        color: '#6d4546',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7',
        cursor: 'pointer',
        '@media only screen and (max-device-width: 425px)': {
            display: 'block',
            width: '100%'
        }
    },
    schoolTableRoom: {
        width: '11%',
        'text-transform': 'uppercase',
        'padding-bottom': '2px',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7',
        '@media screen and (max-device-width: 425px)': {
            display: 'block',
            width: '100%'
        }
    },
    schoolTableTheme: {
        width: '50%',
        'padding-bottom': '2px',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7',
        '@media screen and (max-device-width: 425px)': {
            display: 'block',
            width: '100%',
            'border-top': 'none'
        }
    },
    schoolTableDateTime: {
        'padding-bottom': '2px',
        background: '#eef0ef',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7',
        'text-align': 'center',
        '@media screen and (max-device-width: 425px)': {
            display: 'inline-block',
            width: '49%',
            background: '#fff',
            'border-bottom': 'none'
        }
    },
    schoolTableRow: {
        '@media screen and (max-device-width: 425px)': {
            'border-top': '10px solid #c7c7c7'
        }
    }
}

jss.use(nested())
