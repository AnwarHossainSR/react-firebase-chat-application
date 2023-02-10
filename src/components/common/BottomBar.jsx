import { Stack } from '@mui/material';

const BottomBar = () => {
  return (
    <Stack
      sx={{
        height: '10%',
        borderTop: '1px solid #36404a',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Stack p={2} direction="row" justifyContent="space-between">
        Bottom
      </Stack>
    </Stack>
  );
};

export default BottomBar;
