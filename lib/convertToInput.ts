export const convertToInput = (room: Room) => ({
  breakcount: room.breakcount,
  breaktime: room.breaktime,
  worktime: room.worktime,
  members: room.members,
  count: room.count,
  topic: room.topic,
  name: room.name,
  maintimer: room.maintimer,
  simpletimer: room.simpletimer,
  createdAt: room.createdAt,
  updatedAt: room.updatedAt,
});
