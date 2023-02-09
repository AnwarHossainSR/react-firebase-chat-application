import { Box, Button, Input, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import assets from '../../assets';

const index = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh', background: '#303841' }}>
      <Stack
        sx={{
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
            }}
            alt="logo"
            src={assets && assets.logo}
          />
          <Typography variant="h5" color="#D2D4D5">
            Chatvia
          </Typography>
        </Stack>
        <Stack
          sx={{
            textAlign: 'center',
            mt: 4,
          }}
        >
          <Typography variant="h6" color="#D2D4D5">
            Sign in
          </Typography>
          <Typography variant="p" color="#9AA1b9" mt={1}>
            Sign in to continue to Chatvia
          </Typography>
        </Stack>
        <Stack
          sx={{
            mt: 4,
            width: '456px',
            height: 'auto',
            background: '#262E35',
          }}
        >
          <Stack
            sx={{
              p: 4,
            }}
          >
            <Input
              placeholder="Username"
              sx={{
                mb: 4,
                color: '#A6B0CF',
              }}
            />
            <Input
              placeholder="Password"
              sx={{
                mb: 7,
                color: '#A6B0CF',
              }}
            />
            <Button
              variant="contained"
              sx={{ width: '100%', background: '#6159CB' }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
        <Typography variant="p" color="#9AA1b9" mt={2}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?{' '}
          <Link
            to="/signup"
            style={{
              color: '#6159CB',
              textDecoration: 'none',
            }}
          >
            Signup now
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default index;
