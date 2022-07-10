// import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

export const ContactList = props => {
  return (
    <ul className={s.list}>
      <li>
        <ContactItem />
      </li>
    </ul>
  );
};

ContactList.propTypes = {};
