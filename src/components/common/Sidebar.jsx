import { Stack, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UserAuth } from '../../context/AuthContext';
import {
  convertToArray,
  getCurrentUserChats,
  usersExceptMe,
} from '../../utils/helper';
import ChatCard from '../Card/ChatCard';
import ActiveUser from '../Chat/ActiveUser';
import Search from '../Search';

const Sidebar = () => {
  const { user } = UserAuth();
  const [users, chats] = useOutletContext();
  const allUsers = convertToArray(users);
  const allUsersExceptMe = usersExceptMe(allUsers, user);
  const chatsArr = convertToArray(chats);
  const currentUserChats = getCurrentUserChats(chatsArr, user?.uid);
  const loggedIn = allUsers.find((item) => item?.id === user?.uid);

  return (
    <Stack p={2} gap={1} position="relative">
      <Stack
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Typography variant="p" color="#D2D4D5">
          {`${loggedIn?.firstName} ${loggedIn?.lastName}`}
        </Typography>
        <Search />
      </Stack>
      <Swiper
        slidesPerView="auto"
        spaceBetween={2}
        freeMode
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        {allUsersExceptMe &&
          allUsersExceptMe.map((item) => (
            <SwiperSlide
              key={item?.id}
              style={{
                width: '71px',
              }}
            >
              <ActiveUser
                user={item}
                currentUserChats={currentUserChats}
                chatsArr={chatsArr}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <Stack
        sx={{
          position: 'absolute',
          mt: 20,
        }}
      >
        <Typography variant="p" color="#D2D4D5">
          Recent
        </Typography>
        <Stack mt={2} pb={5}>
          {currentUserChats?.length > 0 ? (
            currentUserChats.map((_, index) => <ChatCard key={index} />)
          ) : (
            <Typography variant="body1" color="#D2D4D5">
              No recent chats
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
