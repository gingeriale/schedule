import Component from 'inferno-component'
import jss from 'jss'

import Header from 'schedule-app/common/Header'
import RoomsChoice from 'schedule-app/edit/RoomsChoice'
import SchoolsChoice from 'schedule-app/edit/SchoolsChoice'
import DatesPicker from 'schedule-app/edit/DatesPicker'
import LecturesByRooms from 'schedule-app/edit/LecturesByRooms'

export default class Schedule extends Component {

    render() {

        return (
            <div>
                <Header/>
                <RoomsChoice/>
                <SchoolsChoice/>
                <DatesPicker/>
                <LecturesByRooms/>
            </div>
        )
    }

}
