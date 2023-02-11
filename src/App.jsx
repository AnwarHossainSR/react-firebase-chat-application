import { Stack } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import Chats from './pages/Chats';
import Home from './pages/Home';
import SignUp from './pages/Home/Signup.jsx';
import Protected from './pages/Protected';

const App = () => {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chats/:userId/" element={<Protected />}>
            <Route index element={<Chats />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Stack>
  );
};

export default App;
