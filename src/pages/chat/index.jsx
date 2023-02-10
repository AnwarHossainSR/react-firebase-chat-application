import { Stack } from '@mui/system';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Chat/Main';
import Sidebar from '../../components/common/Sidebar';
import { UserAuth } from '../../context/AuthContext';

const Chat = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  useEffect(() => {
    if (!user || user === null || Object.keys(user).length === 0) {
      return navigate('/');
    } else {
      return navigate('/chat');
    }
  }, [user]);

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

export default Chat;
