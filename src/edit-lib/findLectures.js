import {compareAsc, parse} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'
import EditLibStore from 'edit-lib/EditLibStore'

/**
 * поиск лекций в аудитории в заданный интервал дат.
 * для каждой лекции каждой школы проверяем ее попадание в интервал дат и добавляем в случае попадания
 * информацию о ней в возвращаемый объект.
 * также добавляем проверку на факт наличия данной лекции в возвращаемом объекте - значит, лекция общая, 
 * корректируем информацию о школе, добавляемой в объект.
 * @param  {string} room
 * @param  {Object} begin - дата
 * @param  {Object} end - дата
 * @return {Object.<string, string, string, string>} -  школа, тема, дата и время для отображения
 */
const findLecturesByRoom = (room, begin, end) => {
    const foundLectures = {}
    EditLibStore.schoolsInfo.keys().forEach(school => {
        const lectures = EditLibStore.schoolsInfo.get(school)
        Object.keys(lectures).forEach(lectureNumber => {
            const lecture = lectures[lectureNumber]
            if (lecture.room === room && filterByDates(begin, end, lecture.date)) {
                if (foundLectures[lecture.theme] !== undefined) {
                    const prevSchool = foundLectures[lecture.theme].school
                    foundLectures[lecture.theme] = {
                        school: `${prevSchool}, ${school}`
                    }}
                else {                
                    foundLectures[lecture.theme] = {
                        school: school
                    }
                }
                foundLectures[lecture.theme].theme = lecture.theme
                foundLectures[lecture.theme].dateView = lecture.dateView
                foundLectures[lecture.theme].timeView = lecture.timeView                
            }
        })
    })
    return foundLectures
}

/**
 * поиск лекций школы в заданный интервал дат.
 * из информации о школе берем список ее лекций и проверяем каждую на попадание в интервал дат.
 * при попадании добавляем в возвращаемый объект информацию о лекии (аудитория, тема, дата и время для отображения)
 * @param  {string} school
 * @param  {Object} begin - дата
 * @param  {Object} end - дата
 * @return {Object.<string, string, string, string>} -  школа, тема, дата и время для отображения
 */
const findLecturesBySchool = (school, begin, end) => {
    const foundLectures = {}
    Object.keys(EditLibStore.schoolsInfo.get(school)).forEach(lectureNumber => {
        const lecture = EditLibStore.schoolsInfo.get(school)[lectureNumber]
        if (filterByDates(begin, end, lecture.date)) {
            foundLectures[lecture.theme] = {
                room: lecture.room,
                theme: lecture.theme,
                dateView: lecture.dateView,
                timeView: lecture.timeView
            }
        }
    })
    return foundLectures
}

/**
 * проверка, попадает ли лекция в заданный интервал дат.
 * для упрощения сравнений используется библиотека date-fns
 * @param  {Object} begin - дата
 * @param  {Object} end - дата
 * @param  {Object} lectureDate - дата
 * @return {boolean}
 */
const filterByDates = (begin, end, lectureDate) => {
    switch (true) {
        case !begin && !end:
            return true
        case !begin && !!end:
            if (compareAsc(parseDate(end), lectureDate) !== -1) {
                return true
            }
            return false
        case !!begin && !end:
            if (compareAsc(lectureDate, parseDate(begin)) !== -1) {
                return true
            }
            return false
        case !!begin && !!end:
            if (compareAsc(lectureDate, parseDate(begin)) !== -1
                && compareAsc(parseDate(end), lectureDate) !== -1
            ) {
                return true
            }
            return false
    }
}

/**
 * вспомогательная функция для получения объекта даты из пользовательского ввода дня и месяца для фильтрации. 
 * полагаем, что год 2017. 
 * время ставим 23:59 для корректного сравнения с датами лекций
 * @param  {string} date
 * @return {Object} - дата
 */
 const parseDate = (date) => {
    return parse(`${date.slice(3)}.${date.slice(0, 3)}.2017 23:59`)
}

export {findLecturesByRoom, findLecturesBySchool}
