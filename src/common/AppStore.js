import {observable, action} from 'mobx'

import HeaderItems from 'schedule-app/common/HeaderItems'

// стор хранит и обрабатывает информацию о состоянии переключателя между заданиями 1 и 2

class AppStore {

    @observable
    header = HeaderItems.SCHEDULE

    @action
    setHeader(header) {
        this.header = header
    }

}

export default new AppStore()
