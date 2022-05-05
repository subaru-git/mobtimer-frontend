export const convertToInput = (room: Room) => ({
  breakcount: room.breakcount,
  breaktime: room.breaktime,
  worktime: room.worktime,
  members: room.members,
  topic: room.topic,
  name: room.name,
  maintimer: room.maintimer,
  createdAt: room.createdAt,
  updatedAt: room.updatedAt,
});
