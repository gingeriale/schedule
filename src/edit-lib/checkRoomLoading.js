import {differenceInHours} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'
/**
 * проверка, есть ли в аудитории лекция в данное время.
 * по всем школам ищем лекции в данной аудитории и добавляем в массив даты таких лекций.
 * проверяем, что для каждой найденной даты выполняется условие начала входящей даты не менее,
 * чем за два часа до и после текущей.
 * @param  {string} school
 * @param  {string} room
 * @param  {Object} date
 * @param  {string} editedLecture - передаем, если режим редактирования, при добавлении по умолчанию ставим null
 * @return {boolean}
 */
const checkRoomLoading = (school, room, date, editedLecture = null) => {
    const roomLoading = []
    Object.keys(schoolsDetails).forEach(schoolName => {
        const schoolInstance = schoolsDetails[schoolName]
        Object.keys(schoolInstance).forEach(lecture => {
            const lectureInstance = schoolInstance[lecture]
            if (lecture === editedLecture && school === schoolName) {
                return
            }
            if (lectureInstance.room === room) {
                roomLoading.push(lectureInstance.date)
            }
        })
    })
    return roomLoading.every(dateFound => {
        return Math.abs(differenceInHours(date, dateFound)) >= 2
    })
}

export default checkRoomLoading
