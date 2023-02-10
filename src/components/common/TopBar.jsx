import { Stack } from '@mui/material';

const TopBar = () => {
  return (
    <Stack
      sx={{
        height: '10%',
        borderBottom: '1px solid #36404a',
      }}
    >
      <Stack p={2} direction="row" justifyContent="space-between">
        Top
      </Stack>
    </Stack>
  );
};

export default TopBar;
