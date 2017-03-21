import Component from 'inferno-component'
import jss from 'jss'

import Header from 'schedule-app/common/Header'
import Table from 'schedule-app/schedule/Table'

export default class Schedule extends Component {

    render() {

        return (
            <div>
                <Header/>
                <Table/>
            </div>
        )
    }

}
