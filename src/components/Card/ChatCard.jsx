import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, Chip, Stack, Typography } from '@mui/material';

const ChatCard = () => {
  //count 21 character and if more then ...
  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };
  return (
    <Stack
      sx={{
        padding: '14px',
        borderRadius: '8px',
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 2,
        '&:hover': {
          background: '#36404A',
        },
      }}
    >
      <Avatar
        src="https://material-ui.com/static/images/avatar/1.jpg"
        sx={{
          width: '30px',
          height: '30px',
        }}
      >
        <FiberManualRecordIcon
          sx={{
            position: 'absolute',
            ml: 5.5,
            mb: 2.6,
            fontSize: '15px',
            color: '#4BB543',
            zIndex: 123,
          }}
        />
      </Avatar>
      <Stack>
        <Typography variant="body2" sx={{ color: '#fff' }}>
          Mahedi Hasan
        </Typography>
        <Typography variant="body2" sx={{ color: '#abb4d2' }}>
          {/* contain just 21 character else ... */}
          {truncate('Hello, how are you?', 21)}
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{ color: '#abb4d2' }}>
          2:31
        </Typography>
        <Typography variant="body2" sx={{ color: '#4BB543' }}>
          <Chip
            label="1"
            size="small"
            sx={{
              background: 'rgba(239,71,111,.18)',
              color: '#ef476f',
            }}
          />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ChatCard;
