import { NavLink } from 'react-router-dom';
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

const AuthMenu = () => {
  return (
    <>
      <StyledLink to="/register">SIGN UP</StyledLink>
      <StyledLink to="/login">SIGN IN</StyledLink>
    </>
  );
};

export default AuthMenu;
