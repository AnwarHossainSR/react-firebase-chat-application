import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Stack, Typography } from '@mui/material';

const OwnMessage = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        maxWidth: '364px',
      }}
    >
      <Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            //gap: '1px',
          }}
        >
          <MoreVertIcon
            sx={{
              color: '#7269ef',
              cursor: 'pointer',
              fontSize: '15px',
            }}
          />
          <Stack
            gutterBottom
            sx={{
              backgroundColor: '#36404A',
              borderRadius: '8px 8px 8px 0',
              color: '#fff',
              padding: '12px 20px',
              position: 'relative',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              maxWidth="364px"
            >
              <Typography>
                Message sssssssssssfddddddddddddddddd fdgggggg
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '4px',
                mt: 1,
                fontSize: '6px',
                color: '#B9B4F7',
              }}
            >
              <AccessTimeIcon
                sx={{
                  fontSize: '12px',
                  color: '#B9B4F7',
                }}
              />
              <Typography variant="caption"> 2 hours ago</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant="caption"> Anwar Hossain</Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
      </Stack>
    </Stack>
  );
};

export default OwnMessage;
