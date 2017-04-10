import Component from 'inferno-component'
import jss from 'jss'
import {observer} from 'inferno-mobx'
import cn from 'classnames'
import nested from 'jss-nested'

import ScheduleStore from 'schedule-app/schedule/ScheduleStore'
import Schools from 'schedule-app/schedule/Schools'
import EditLibStore from 'edit-lib/EditLibStore'
import isLecturePast from 'schedule-app/schedule/isLecturePast'

@observer
export default class Table extends Component {

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
            </div>
        )
    }

    renderContent(school) {
        const {classes} = jss.createStyleSheet(styles).attach()
        const content = EditLibStore.schoolsInfo.get(school)
        return (
            <table className={classes.schoolTable}>
                {Object.keys(content).map(lecture => {
                    return (
                        <tr>
                            <td className={classes.schoolTableCommonCell}>{content[lecture].common ? (
                                    <div className={classes.schoolTableCommon}>общая</div>
                                ) : (
                                    null
                                )}
                            </td>
                            <td className={classes.schoolTableTheme}>{content[lecture].theme}</td>
                            <td className={classes.schoolTableSpeaker}>{content[lecture].speaker}</td>
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
        'font-family': "Menlo, Monaco, monospace"
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
        'font-family': "Menlo, Monaco, monospace"
    },
    schoolTableCommonCell: {
        width: '50px'
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
        'border-top': '1px solid #c7c7c7'
    },
    schoolTableRoom: {
        width: '11%',
        'text-transform': 'uppercase',
        'padding-bottom': '2px',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7'
    },
    schoolTableTheme: {
        width: '50%',
        'padding-bottom': '2px',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7'
    },
    schoolTableDateTime: {
        'padding-bottom': '2px',
        background: '#eef0ef',
        'border-bottom': '1px solid #c7c7c7',
        'border-top': '1px solid #c7c7c7',
        'text-align': 'center'
    }
}

jss.use(nested())
