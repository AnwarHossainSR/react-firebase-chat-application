import { Stack, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChatCard from '../Card/ChatCard';
import ActiveUser from '../Chat/ActiveUser';
import Search from '../Search';

const Sidebar = () => {
  return (
    <Stack p={3} gap={1} position="relative">
      <Stack
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Typography variant="p" color="#D2D4D5">
          Chats
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
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '71px',
            }}
          >
            <ActiveUser index={index} />
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
        <Stack
          mt={2}
          sx={{
            width: '100%',
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <ChatCard key={index} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
