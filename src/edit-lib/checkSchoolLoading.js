import {differenceInHours} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'

/**
 * проверка, есть ли у школы лекция в данное время.
 * для каждой лекции школы проверяем, чтобы дата начала добавляемой\редактируемой лекции
 * была не менее, чем за два часа до и после проверямой
 * @param  {string} school
 * @param  {Object} date
 * @param  {string} editedLecture - передаем, если режим редактирования, при добавлении по умолчанию ставим null
 * @return {boolean}
 */
const checkSchoolLoading = (school, date, editedLecture = null) => {
    return Object.keys(schoolsDetails[school]).every(lecture => {
        if (lecture === editedLecture) {
            return true
        }
        const lectureInstance = schoolsDetails[school][lecture]
        return Math.abs(differenceInHours(date, lectureInstance.date)) >= 2
    })
}

export default checkSchoolLoading
