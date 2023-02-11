import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const TopBar = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Stack
      sx={{
        maxHeight: '10%',
        borderBottom: '1px solid #36404a',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <Avatar src="https://avatars.githubusercontent.com/u/47035452?v=4" />
        <Typography variant="p">Mahedi Hasan</Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          pl: 13,
        }}
      >
        <SearchIcon cursor="pointer" />
        <ExitToAppIcon cursor="pointer" onClick={handleLogout} />
      </Stack>
    </Stack>
  );
};

export default TopBar;
