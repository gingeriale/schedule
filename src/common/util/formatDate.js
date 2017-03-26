import {format} from 'date-fns'
import ru from 'date-fns/locale/ru' 

const formatDate = (date) => {
    return format(date, 'DD MMMM YYYY', {locale: ru})
}

export default formatDate
