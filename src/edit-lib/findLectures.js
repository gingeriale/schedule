import {compareAsc, parse} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'

const findLectures = (room, begin, end) => {
    const foundLectures = {}
    Object.keys(schoolsDetails).forEach(school => {
        const lectures = schoolsDetails[school]
        Object.keys(lectures).forEach(lectureNumber => {
            const lecture = lectures[lectureNumber]
            if (lecture.room === room && filterByDates(begin, end, lecture.date)) {
                foundLectures[lecture.theme] = {
                    // school: school,
                    theme: lecture.theme,
                    date: lecture.dateView,
                    time: lecture.timeView
                }
            }
        })
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

export default findLectures
