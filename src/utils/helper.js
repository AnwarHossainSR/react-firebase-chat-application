export const convertToArray = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push({...obj[key], id : key});
  }
  // return arr randomly
  return arr.sort(() => Math.random() - 0.5);
};

export const getCurrentUserChats = (chats, userId) => {
  return chats.filter((chat) => chat?.userIds?.includes(userId));
};

export const isChatExist = (chats, userId) => {
  return chats.find((chat) => chat?.userIds?.includes(userId));
};
