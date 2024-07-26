import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const classRoomArr = sizes.map((size) => new ClassRoom(size));
  return classRoomArr;
}
export default initializeRooms;
