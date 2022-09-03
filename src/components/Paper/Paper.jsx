import PropTypes from 'prop-types';

const Paper = props => {
  return <>{props.children}</>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
