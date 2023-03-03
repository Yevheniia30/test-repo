import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import styled from 'styled-components';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

import { useAuth } from 'hooks/useAuth';
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
  return (
    <header>
      <nav>
        {/* <StyledLink to="/">HOME</StyledLink> */}
        {/* <StyledLink to="/users">USERS</StyledLink> */}
        <StyledLink to="/heroes">HEROES</StyledLink>
        <StyledLink to="/products">PRODUCTS</StyledLink>
        <StyledLink to="/basket">BASKET</StyledLink>
        {/* {isLogin ? <UserMenu /> : <AuthMenu />} */}

        {/* {navArray.map(item => (
          <StyledLink key={item.to} to={item.to} exact={item.exact}>
            {item.name}
          </StyledLink>
        ))} */}
        <LangSwitcher />
      </nav>
    </header>
  );
};

export default NavBar;
