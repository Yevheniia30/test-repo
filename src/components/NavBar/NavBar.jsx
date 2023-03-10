import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import styled from 'styled-components';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectUser } from 'redux/auth/authSelectors';
import { selectIsLogin } from 'redux/auth/authSelectors';

import { useAuth } from 'hooks/useAuth';
import Button from 'components/Button/Button';
import { logout } from 'redux/auth/authOperations';
// import { selectIsLogin } from 'redux/auth/authSelectors';
const StyledLink = styled(NavLink)`
  color: black;
  &:hover {
    color: black;
  }
  &.active {
    color: orange;
  }
  margin-right: 15px;
  text-decoration: none;
`;

// const getClass = props => {
// const className = isAcive ? s.activeLink : s.link;
// return className;
// }

const navArray = [
  { to: '/', name: 'HOME' },
  // { to: '/posts', name: 'POSTS' },
  { to: '/users', name: 'USERS' },
  { to: '/register', name: 'REGISTER' },
];

const NavBar = () => {
  // const isLogin = useSelector(selectIsLogin);
  // const isLogin = useAuth();
  const cart = useSelector(state => state.cart.cart);
  const user = useSelector(selectUser);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const location = useLocation();

  console.log('location', location);

  const sum = cart.reduce((acc, value) => acc + parseInt(value.price) * value.quantity, 0);
  const quantity = cart.reduce((acc, value) => acc + value.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <nav>
        {/* <StyledLink to="/">HOME</StyledLink> */}
        {/* <StyledLink to="/users">USERS</StyledLink> */}

        {!isLogin ? (
          <>
            <StyledLink to="/signup">SIGNUP</StyledLink>
            <StyledLink to="/login">LOGIN</StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="/products">PRODUCTS</StyledLink>
            <StyledLink to="/basket">BASKET</StyledLink>
            <StyledLink to="/heroes">HEROES</StyledLink>
          </>
        )}
      </nav>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
        {isLogin && user && (
          <>
            {cart?.length ? (
              <span>
                {quantity}|{sum}
              </span>
            ) : (
              <span>Basket is empty</span>
            )}

            <div>
              <span>{`Hello, ${user.name}!`}</span> <button onClick={handleLogout}>Exit</button>
            </div>
          </>
        )}
        {/* {isLogin ? <UserMenu /> : <AuthMenu />} */}

        {/* {navArray.map(item => (
          <StyledLink key={item.to} to={item.to} exact={item.exact}>
            {item.name}
          </StyledLink>
        ))} */}
        <LangSwitcher />
      </div>
    </header>
  );
};

export default NavBar;
