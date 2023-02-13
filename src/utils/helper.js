export const convertToArray = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push({ ...obj[key], id: key });
  }
  // return arr randomly
  return arr;
};

export const getCurrentUserChats = (chats, userId) => {
  if (typeof chats === 'object') {
    chats = convertToArray(chats);
  }
  return chats.filter((chat) => chat?.userIds?.includes(userId));
};

export const isChatExist = (chats, userId) => {
  if (typeof chats === 'object') {
    chats = convertToArray(chats);
  }
  return chats.find((chat) => chat?.userIds?.includes(userId));
};

export const usersExceptMe = (users, user) => {
  return users.filter((item) => item?.id !== user?.uid);
};

export const getMessages = (chatId, userId, currentUserId) => {
  const messages = [];
  if (chatId && userId && currentUserId) {
    const chatMessages = JSON.parse(localStorage.getItem(chatId));
    if (chatMessages) {
      chatMessages.forEach((message) => {
        if (message?.userId === userId || message?.userId === currentUserId) {
          messages.push(message);
        }
      });
    }
  }
  return messages;
};
