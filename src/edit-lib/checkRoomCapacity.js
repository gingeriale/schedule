import amountDetails from 'edit-lib/amountDetails'
import roomsDetails from 'edit-lib/roomsDetails'

const checkRoomCapacity = (school, roomName) => {
    const room = Object.keys(roomsDetails).find(room => {
        return roomsDetails[room].name === roomName
    })
    return amountDetails[school] <= roomsDetails[room].capacity
}

export default checkRoomCapacity
