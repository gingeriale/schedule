import {observable, action} from 'mobx'

import HeaderItems from 'schedule-app/common/HeaderItems'

class AppStore {

    @observable
    header = HeaderItems.SCHEDULE

    @action
    setHeader(header) {
        this.header = header
    }

}

export default new AppStore()
