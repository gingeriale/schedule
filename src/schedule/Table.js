import Component from 'inferno-component'
import jss from 'jss'
import {observer} from 'inferno-mobx'
import cn from 'classnames'

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
            <table>
                {Object.keys(content).map(lecture => {
                    return (
                        <tr>
                            <td>{content[lecture].common ? (
                                    'общая лекция'
                                ) : (
                                    null
                                )}
                            </td>
                            <td>{content[lecture].theme}</td>
                            <td>{content[lecture].speaker}</td>
                            <td>{content[lecture].room}</td>
                            <td>
                                {isLecturePast(content[lecture].date) ? (
                                    <a target="_blank" href={content[lecture].materials}>материалы</a>
                                ) : (
                                    content[lecture].dateView
                                )}
                            </td>
                            <td>
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
        width: '100px'
    },
    activeSchoolName: {
        
    }
}
