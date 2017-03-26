import Component from 'inferno-component'
import jss from 'jss'

import Header from 'schedule-app/common/Header'
import Rooms from 'schedule-app/edit/Rooms'
import LecturesByRooms from 'schedule-app/edit/LecturesByRooms'

export default class Schedule extends Component {

    render() {

        return (
            <div>
                <Header/>
                <Rooms/>
                <LecturesByRooms/>
            </div>
        )
    }

}
