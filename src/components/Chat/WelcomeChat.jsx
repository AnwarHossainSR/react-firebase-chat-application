import { Box, Stack, Typography } from '@mui/material';
import assets from '../../assets';

const WelcomeChat = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box
        component="img"
        src={assets?.WelcomeChat}
        sx={{ width: '50%', height: '50%' }}
      />
      <Typography variant="h5" sx={{ color: '#D2D4D5', mt: 2 }}>
        Welcome to Chatvia
      </Typography>
    </Stack>
  );
};

export default WelcomeChat;
