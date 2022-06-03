export const rotationNextMembers = (members: string[]) => {
  if (members.length === 0) return members;
  let newOrder = [...members];
  const first = newOrder.shift();
  return [...newOrder, first];
};

export const rotationPreviousMembers = (members: string[]) => {
  if (members.length === 0) return members;
  let newOrder = [...members];
  const last = newOrder.pop();
  return [last, ...newOrder];
};
