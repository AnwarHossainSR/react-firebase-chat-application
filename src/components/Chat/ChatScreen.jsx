import { Stack } from '@mui/material';
import { equalTo, orderByChild, query, ref } from 'firebase/database';
import { useEffect, useRef } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { database, useFirebase } from '../../utils/firebase';
import { convertToArray } from '../../utils/helper';
import OtherMessage from '../Message/OtherMessage';
import OwnMessage from '../Message/OwnMessage';

const ChatScreen = () => {
  const [users] = useOutletContext();
  const { user } = UserAuth();
  const { chatId } = useParams();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const messages = useFirebase(
    query(ref(database, 'messages'), orderByChild(`chatId`), equalTo(chatId))
  );

  const messagesArray = convertToArray(messages).sort(
    (a, b) => a.createdAt - b.createdAt
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Stack>
      <Stack
        my={1}
        mx={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        26th, July
      </Stack>
      <Stack
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {messagesArray &&
          messagesArray.map((message, index) =>
            index > 0 && message?.userId !== user?.uid ? (
              <Stack
                sx={{
                  marginRight: 'auto',
                  my: 1,
                }}
                key={message.id}
              >
                <OtherMessage
                  message={message}
                  userInfo={users?.[message?.userId]}
                />
              </Stack>
            ) : (
              index > 0 && (
                <Stack
                  sx={{
                    marginLeft: 'auto',
                    my: 1,
                  }}
                  key={message.id}
                >
                  <OwnMessage
                    message={message}
                    userInfo={users?.[message?.userId]}
                  />
                </Stack>
              )
            )
          )}
        <div ref={messagesEndRef} />
      </Stack>
    </Stack>
  );
};

export default ChatScreen;
