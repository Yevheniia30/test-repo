import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <p>
        {user?.name} {user?.email}
      </p>

      <button type="button" onClick={() => dispatch(logout())}>
        Exit
      </button>
    </>
  );
};

export default UserMenu;
