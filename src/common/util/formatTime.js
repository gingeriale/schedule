import {format} from 'date-fns'
import ru from 'date-fns/locale/ru' 

const formatTime = (date) => {
    return format(date, 'HH:mm', {locale: ru})
}

export default formatTime
