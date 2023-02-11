import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Stack, Typography } from '@mui/material';

const TopBar = () => {
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
        <MoreVertIcon cursor="pointer" />
      </Stack>
    </Stack>
  );
};

export default TopBar;
