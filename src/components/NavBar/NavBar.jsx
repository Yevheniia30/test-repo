import { NavLink } from 'react-router-dom';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import styled from 'styled-components';

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

const navArray = [
  { to: '/', name: 'HOME' },
  { to: '/posts', name: 'POSTS' },
  { to: '/users', name: 'USERS' },
  { to: '/register', name: 'REGISTER' },
];

const NavBar = () => {
  return (
    <header>
      <nav>
        {navArray.map(item => (
          <StyledLink key={item.to} to={item.to} exact={item.exact}>
            {item.name}
          </StyledLink>
        ))}
        <LangSwitcher />
      </nav>
    </header>
  );
};

export default NavBar;
