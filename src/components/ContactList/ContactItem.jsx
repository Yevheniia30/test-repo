// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactItem = ({ item, onDelete }) => {
  return (
    <li className={s.item}>
      <b className={s.name}>{item.name}</b>
      <span>{item.number}</span>
      <button className={s.btn} onClick={() => onDelete(item.id)}>
        Delete contact
      </button>
    </li>
  );
};
