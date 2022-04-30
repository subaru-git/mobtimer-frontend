export const convertToInput = (room: Room) => ({
  breakcount: room.breakcount,
  breaktime: room.breaktime,
  worktime: room.worktime,
  members: room.members,
  topic: room.topic,
  name: room.name,
});
