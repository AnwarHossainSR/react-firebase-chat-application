import { Stack } from '@mui/material';
import BottomBar from '../common/BottomBar';
import TopBar from '../common/TopBar';
import ChatScreen from './ChatScreen';

const Main = () => {
  return (
    <Stack
      sx={{
        width: { calc: '100vw - 310px' },
        height: '100vh',
        background: '#212529',
      }}
    >
      <TopBar />
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
    </Stack>
  );
};

export default Main;
