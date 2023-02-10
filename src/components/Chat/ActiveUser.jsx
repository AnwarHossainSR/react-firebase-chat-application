import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, Stack, Typography } from '@mui/material';

const ActiveUser = () => {
  return (
    <div
      style={{
        width: '71px',
        height: '81px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          position: 'absolute',
          mb: 0.5,
          mr: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <FiberManualRecordIcon
          sx={{
            position: 'absolute',
            ml: 5.5,
            mb: 2.6,
            fontSize: '12px',
            color: '#4BB543',
            zIndex: 1,
          }}
        />
        <Avatar
          sx={{
            mb: 5.5,
            ml: 3,
            width: '30px',
            height: '30px',
          }}
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </Stack>

      <div
        style={{
          width: '65px',
          height: '51px',
          background: '#36404A',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: '#fff', mt: 1.5 }}>
          Mahedi
        </Typography>
      </div>
    </div>
  );
};

export default ActiveUser;
