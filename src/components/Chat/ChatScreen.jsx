import { Stack } from '@mui/material';
import OtherMessage from '../Message/OtherMessage';
import OwnMessage from '../Message/OwnMessage';

const ChatScreen = () => {
  return (
    <Stack
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          marginLeft: 'auto',
        }}
      >
        <OwnMessage />
      </Stack>
      <Stack
        sx={{
          marginRight: 'auto',
        }}
      >
        <OtherMessage />
      </Stack>
    </Stack>
  );
};

export default ChatScreen;
