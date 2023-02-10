import { Stack } from '@mui/material';
import Message from '../Message';

const ChatScreen = () => {
  return (
    <Stack
      sx={{
        p: 2,
      }}
    >
      <Stack
        sx={{
          float: 'left',
        }}
      >
        <Message />
      </Stack>
      <Stack
        sx={{
          float: 'right',
        }}
      >
        <Message />
      </Stack>
    </Stack>
  );
};

export default ChatScreen;
