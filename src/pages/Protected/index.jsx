import { ref } from 'firebase/database';
// import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { database, useFirebase } from '../../utils/firebase';

const Protected = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  //   const { pathname } = useLocation();
  const users_ref = ref(database, `users`);
  const users = useFirebase(users_ref);
  const chats_ref = ref(database, `chats`);
  const chats = useFirebase(chats_ref);
  const messages_ref = ref(database, `messages`);
  const messages = useFirebase(messages_ref);
  if (!user || user === null || Object.keys(user).length === 0) {
    return navigate('/');
  }
  return <Outlet context={[users, chats, chats_ref, messages, messages_ref]} />;
};

export default Protected;
