import {format} from 'date-fns'
import ru from 'date-fns/locale/ru'

const formatDateTime = (schDetails) => {
    Object.values(schDetails).forEach(lect => {
        lect.date = format(lect.date, 'DD MMMM YYYY', {locale: ru})
        lect.time = format(lect.time, 'HH:MM', {locale: ru})
    })
    return schDetails
}

export default formatDateTime