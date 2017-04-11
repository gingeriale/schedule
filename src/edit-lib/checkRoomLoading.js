import {differenceInHours} from 'date-fns'

import schoolsDetails from 'edit-lib/schoolsDetails'

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
