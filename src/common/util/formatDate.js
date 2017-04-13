import {format} from 'date-fns'
import ru from 'date-fns/locale/ru' 

// метод для формативания даты
// на вход принимает объект даты и возврашает строку в формате 'YYYY-MM-DD'

const formatDate = (date) => {
    return format(date, 'YYYY-MM-DD', {locale: ru})
}

export default formatDate
