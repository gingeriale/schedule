import {compareAsc} from 'date-fns'

// метод принимает на вход объект даты и возвращает true, если дата в прошлом и false, если нет
// для облегчения работы с датой используется библиотека date-fns

const isLecturePast = (date) => {
    return compareAsc(new Date(), date) === 1
}

export default isLecturePast
