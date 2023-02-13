import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import assets from '../../assets';
import { UserAuth } from '../../context/AuthContext';
import { loginValidation } from '../../utils/validation';

const index = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({});
  const { user, signIn } = UserAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const errors = loginValidation(inputData);
    if (Object.keys(errors).length !== 0) {
      setLoading(false);
      return setError(errors);
    }
    try {
      await signIn(inputData.email, inputData.password);
      setLoading(false);
    } catch (error) {
      const errors = {};
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        errors.custom = 'User not found';
      }
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        errors.custom = 'Wrong password';
      }
      setLoading(false);
      return setError(errors);
    }
  };

  useEffect(() => {
    if (user && user !== null && Object.keys(user).length !== 0)
      return navigate(`/chats/${user.uid}`);
  }, [user]);

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        maxHeight: '100vh',
        background: '#303841',
      }}
    >
      <Stack
        sx={{
          py: 5,
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
            width: '451px',
            height: 'auto',
            background: '#262E35',
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              p: 4,
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Email address"
              type="email"
              name="email"
              onChange={handleChange}
              required
              error={error?.email !== undefined}
              helperText={error?.email}
              autoComplete="off"
              sx={{
                mb: 4,
                input: { color: '#95AECA' },
              }}
            />
            <TextField
              fullWidth
              placeholder="Password"
              variant="standard"
              name="password"
              type="password"
              onChange={handleChange}
              required
              error={error?.password !== undefined}
              helperText={error?.password}
              autoComplete="off"
              sx={{
                mb: 4,
                input: { color: '#95AECA' },
              }}
            />
            {error.custom && (
              <Alert
                severity="error"
                sx={{
                  mb: 4,
                }}
              >
                {error.custom}
              </Alert>
            )}
            <Button
              variant="contained"
              sx={{ width: '100%', background: '#6159CB' }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign in'
              )}
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
