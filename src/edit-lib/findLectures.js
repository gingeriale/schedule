import {compareAsc, parse} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'
import EditLibStore from 'edit-lib/EditLibStore'

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

 const parseDate = (date) => {
    return parse(`${date.slice(3)}.${date.slice(0, 3)}.2017 23:59`)
}

export {findLecturesByRoom, findLecturesBySchool}
