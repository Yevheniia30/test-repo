import PropTypes from 'prop-types';
import { MainStyled } from './MainStyled';

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

Main.propTypes = {};

export default Main;
