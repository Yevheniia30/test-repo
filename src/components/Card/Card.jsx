import PropTypes from 'prop-types';
import def from '../../assets/default.jpg';

const Card = ({ image = def, title }) => {
  return (
    <div>
      <img src={image} alt="logo" />
      <p>University</p>
      <h3>{title}</h3>
    </div>
  );
};

Card.propTypes = {};

export default Card;
