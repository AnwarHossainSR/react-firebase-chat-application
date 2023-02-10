import { Stack } from '@mui/material';
import TopBar from '../common/TopBar';
import ChatScreen from './ChatScreen';

const Main = () => {
  return (
    <Stack
      sx={{
        background: '#262E35',
        minHeight: '100vh',
        maxHeight: '100vh',
      }}
    >
      <TopBar />
      <Stack>
        <ChatScreen />
      </Stack>
    </Stack>
  );
};

export default Main;
