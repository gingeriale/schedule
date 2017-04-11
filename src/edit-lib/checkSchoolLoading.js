import {differenceInHours} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'

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
