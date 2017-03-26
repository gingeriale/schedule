import schoolsDetails from 'edit-lib/schoolsDetails'

const findLectures = (room) => {
    const foundLectures = {}
    Object.keys(schoolsDetails).forEach(school => {
        const lectures = schoolsDetails[school]
        Object.keys(lectures).forEach(lectureNumber => {
            const lecture = lectures[lectureNumber]
            if (lecture.room === room) {
                foundLectures[Math.round(Math.random()*1000)] = {
                    school: school,
                    theme: lecture.theme,
                    date: lecture.dateView,
                    time: lecture.timeView
                }
            }
        })
    })
    return foundLectures
}

export default findLectures
