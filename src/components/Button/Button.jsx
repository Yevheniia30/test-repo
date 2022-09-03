import PropTypes from 'prop-types';

const Button = ({ text, icon, onClick }) => {
  return (
    <button type="button" name={text}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
