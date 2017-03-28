import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'

import EditStore from 'schedule-app/edit/EditStore'
import Header from 'schedule-app/common/Header'
import RoomsChoice from 'schedule-app/edit/RoomsChoice'
import SchoolsChoice from 'schedule-app/edit/SchoolsChoice'
import DatesPicker from 'schedule-app/edit/DatesPicker'
import tabs from 'schedule-app/edit/Tabs'
import LecturesByRooms from 'schedule-app/edit/LecturesByRooms'
import LecturesBySchools from 'schedule-app/edit/LecturesBySchools'

@observer
export default class Schedule extends Component {

    render() {

        return (
            <div>
                <Header/>
                <DatesPicker/>
                {EditStore.tab === tabs.ROOM ? (
                    <div>
                        <RoomsChoice/>
                        <LecturesByRooms/>
                    </div>
                ) : (
                    <div>
                        <SchoolsChoice/>
                        <LecturesBySchools/>
                    </div>
                )}
            </div>
        )
    }

}
