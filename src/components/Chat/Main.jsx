import { Stack } from '@mui/material';
import { useLocation, useOutletContext } from 'react-router-dom';
import BottomBar from '../common/BottomBar';
import TopBar from '../common/TopBar';
import ChatScreen from './ChatScreen';
import WelcomeChat from './WelcomeChat';

const Main = () => {
  const { pathname } = useLocation();
  const [users, , , chat] = useOutletContext();
  const chatUserId = chat?.userIds?.[1];
  const chatUser = users?.[chatUserId];
  // // const messages = ref(database, 'messages')
  // //   .orderByChild('chatId')
  // //   .equalTo(chat?.id);
  // const messages = useFirebase(
  //   query(ref(database, 'messages'), orderByChild(`chatId`), equalTo(chat?.id))
  // );

  return (
    <Stack
      sx={{
        width: { calc: '100vw - 310px' },
        height: '100vh',
        background: '#212529',
      }}
    >
      {pathname === '/chats' && <WelcomeChat />}
      {chat && (
        <>
          <TopBar chatUser={chatUser} />
          <Stack
            sx={{
              height: '80%',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                //show scroll bar with 3 seconds transition
                transition: 'all 0.3s',
                width: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#646D76',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-corner': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-resizer': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <ChatScreen />
          </Stack>
          <BottomBar />
        </>
      )}
    </Stack>
  );
};

export default Main;
