import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, Stack, Typography } from '@mui/material';
import { set } from 'firebase/database';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { isChatExist } from '../../utils/helper';

const ActiveUser = ({ user, currentUserChats }) => {
  const [, , chats_ref] = useOutletContext();
  const navigate = useNavigate();

  const handleClick = async (id) => {
    const checkChat = await isChatExist(currentUserChats, id);
    if (checkChat) {
      return navigate(`./${checkChat?.id}`);
    } else {
      const uid = uuid();
      set(chats_ref, {
        [uid]: {
          chatId: uid,
          userIds: [user?.id, id],
          createdAt: Date.now(),
        },
      });
      return navigate(`./${uid}`);
    }
  };

  return (
    <div
      style={{
        width: '71px',
        height: '81px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => handleClick(user?.id)}
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
          {user?.firstName}
        </Typography>
      </div>
    </div>
  );
};

export default ActiveUser;
