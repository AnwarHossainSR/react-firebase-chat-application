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
        minWidth: '100vw',
        maxWidth: '100vw',
        minHeight: '100vh',
        maxHeight: '100vh',
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
            maxWidth: '310px',
            minWidth: '310px',
          }}
        >
          <Sidebar />
        </Stack>
        <Stack
          sx={{
            flex: 6,
          }}
        >
          <Main />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Chat;
