import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, Stack, Typography } from '@mui/material';
import { ref, update } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { UserAuth } from '../../context/AuthContext';
import { database } from '../../utils/firebase';
import { isChatExist } from '../../utils/helper';

const ActiveUser = ({ activeUser, chats }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const handleClick = async (id) => {
    const checkChat = await isChatExist(chats, id);
    console.log('checkChat', checkChat);
    if (checkChat) return navigate(`/chats/${checkChat?.id}`);
    const uid = uuid();

    const chat_ref = ref(database, `chats/${uid}`);
    update(chat_ref, {
      chatId: uid,
      userIds: [user?.uid, id],
      createdAt: Date.now(),
    });
    const uid2 = uuid();
    const messageRef = ref(database, `messages/${uid2}`);
    update(messageRef, {
      chatId: uid,
      createdAt: Date.now(),
    });
    return navigate(`/chats/${uid}`);
  };

  // const ActiveUser = ({ activeUser, chats }) => {
  //   const navigate = useNavigate();
  //   const handleClick = async (id) => {
  //     const checkChat = await isChatExist(chats, id);
  //     if (checkChat) return navigate(`/chats/${checkChat?.id}/${activeUser?.id}`);
  //     const uid = uuid();
  //     return navigate(`/chats/${uid}/${activeUser?.id}`);
  //   };

  return (
    <div
      style={{
        width: '71px',
        height: '81px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => handleClick(activeUser?.id)}
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
          cursor: 'pointer',
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
          alt={activeUser?.firstName}
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
          {activeUser?.firstName}
        </Typography>
      </div>
    </div>
  );
};

export default ActiveUser;
