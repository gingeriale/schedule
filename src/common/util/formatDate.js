import {format} from 'date-fns'
import ru from 'date-fns/locale/ru' 

const formatDate = (date) => {
    return format(date, 'YYYY-MM-DD', {locale: ru})
}

export default formatDate
