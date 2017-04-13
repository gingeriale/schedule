import amountDetails from 'edit-lib/amountDetails'
import roomsDetails from 'edit-lib/roomsDetails'

/**
 * проверка, вместит ли аудитория студентов школы - 
 * сравниваем вместимость аудитории и кол-во учеников школы
 * @param  {string} school
 * @param  {string} roomName
 * @return {boolean}
 */
const checkRoomCapacity = (school, roomName) => {
    const room = Object.keys(roomsDetails).find(room => {
        return roomsDetails[room].name === roomName
    })
    return amountDetails[school] <= roomsDetails[room].capacity
}

export default checkRoomCapacity
