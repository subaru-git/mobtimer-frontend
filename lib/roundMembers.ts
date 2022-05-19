export const roundMembers = (members: string[]) => {
  console.log(members);
  if (members.length === 0) return members;
  let newOrder = [...members];
  const first = newOrder.shift();
  return [...newOrder, first];
};
