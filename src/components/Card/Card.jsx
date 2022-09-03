import PropTypes from 'prop-types';
import def from '../../assets/default.jpg';
import s from './Card.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiTrash2, FiEdit } from 'react-icons/fi';

const Card = ({ image = def, title }) => {
  return (
    <div className={s.card}>
      <img src={image} alt="logo" />
      <p>University</p>
      <h3>{title}</h3>
      <div className={s.icons}>
        <FiEdit />
        <FiTrash2 />
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
