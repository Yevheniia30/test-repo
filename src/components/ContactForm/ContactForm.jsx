// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export const ContactForm = ({
  name,
  number,
  onAdd,
  onChangeName,
  onChangeNumber,
}) => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={name}
          onChange={onChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          value={number}
          onChange={onChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.input} onClick={onAdd}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {};
