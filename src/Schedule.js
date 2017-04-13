import Component from 'inferno-component'

import Header from 'schedule-app/common/Header'
import Table from 'schedule-app/schedule/Table'

// рендер задания 1: общий хедер переключения между заданиями и таблица с расписанием

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
