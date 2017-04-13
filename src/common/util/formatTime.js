import {format} from 'date-fns'
import ru from 'date-fns/locale/ru' 

// метод для формативания даты
// на вход принимает объект даты и возврашает строку в формате 'HH:mm'

const formatTime = (date) => {
    return format(date, 'HH:mm', {locale: ru})
}

export default formatTime
