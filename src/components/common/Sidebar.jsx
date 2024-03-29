import { Stack, Typography } from '@mui/material';
import {
  equalTo,
  limitToLast,
  orderByChild,
  query,
  ref,
} from 'firebase/database';
import { useOutletContext } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UserAuth } from '../../context/AuthContext';
import { database, useFirebase } from '../../utils/firebase';
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
  const currentUserChats = getCurrentUserChats(chats, user?.uid);
  const loggedIn = allUsers.find((item) => item?.id === user?.uid);

  currentUserChats.forEach((item) => {
    const message = useFirebase(
      query(
        ref(database, 'messages'),
        orderByChild(`chatId`),
        equalTo(item.id),
        limitToLast(1)
      )
    );
    const data = Object.values(message);
    item.lastMessage = data[0]?.message;
  });

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
              <ActiveUser activeUser={item} chats={chats} />
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
            currentUserChats.map((item, index) => (
              <ChatCard key={index} chat={item} />
            ))
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
