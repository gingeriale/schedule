import {compareAsc} from 'date-fns'

const isLecturePast = (date) => {
    return compareAsc(new Date(), date) === 1
}

export default isLecturePast
