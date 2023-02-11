import { Stack } from '@mui/system';
import Main from '../../components/Chat/Main';
import Sidebar from '../../components/common/Sidebar';

const Chats = () => {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
        background: '#303841',
        color: '#A2AEAD',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Stack
          sx={{
            flex: 2,
            width: '310px',
            height: '100%',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '0.4em',
            },
          }}
        >
          <Sidebar />
        </Stack>
        <Stack flex={6}>
          <Main />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Chats;
