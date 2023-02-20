import { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'hooks/useForm';

import local from '../../local/local.json';
import { LangContext } from '../../context/LangContext';
import { propTypes } from 'react-bootstrap/esm/Image';

const init = {
  name: '',
  number: '',
  // gender: null,
  // agreed: false,
  // course: '',
};

const StudentsForm = ({ onSubmit, userToEdit, id, onClose }) => {
  const initialValues = userToEdit ?? init;
  const { state, handleChange, handleSubmit } = useForm(onSubmit, initialValues, id, onClose);

  const { lang } = useContext(LangContext);

  // console.log('local', local);

  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleChangeName = e => {
  //   setName(e.target.value);
  // };

  // const handleChangePhone = e => {
  //   setPhone(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ name, phone, id: nanoid(4) });
  //   setName('');
  //   setPhone('');
  // };

  const inputRef = useRef();
  // console.log('inpetref', inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'phone':
  //       setPhone(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // ==============СLASSS============================
  // state = { ...INITIAL_STATE };

  // static defaultProps={
  //   onSubmit: ()=>{}
  // }

  // static propTypes={
  //   onSubmit: PropTypes.func
  // }

  //   якщо форма не контрольована то метод зміни полів форми не потрібен (бо значення потрібно знати лише під час сабміту)
  // handleChange = e => {
  //   console.log('e target', e.target);
  //   const { name, value, type, checked } = e.target;
  //   this.setState({
  //     // обчислювана властивість об'єкта в []
  //     [name]: type === 'checkbox' ? checked : value,
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit({ ...this.state, id: nanoid(4) });
  //   this.setState({ ...INITIAL_STATE });
  // };

  //   неконтрольована форма
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('e currentTarget', e.currentTarget.elements);

  //   const name = e.currentTarget.elements.name.value;
  //   const phone = e.currentTarget.elements.phone.value;
  //   this.setState(prev => ({
  //     students: [{ id: new Date(), name, phone }, ...prev.students],
  //   }));
  //   e.currentTarget.reset();
  // };

  // публічна властивість класу (записується на екземпляр, тому  в кожного екземпляру будуть свої)

  // якщо загорнути ці змінні в useMemo, вони не будуть генеруватися при кожній зміні інпута

  const nameInputId = useMemo(() => nanoid(4), []);
  const phoneInputId = useMemo(() => nanoid(4), []);

  // const { handleChange, nameInputId, phoneInputId, handleSubmit } = this;
  // const { handleSubmit } = this.props;
  // const { name, phone, gender, agreed, course } = this.state;

  const nameLabel = local.name[lang];
  const phoneLabel = local.phone[lang];
  const btnTitle = userToEdit ? local.edit[lang] : local.add[lang];

  // const handleUpdate = e => {
  //   e.preventDefault();
  //   console.log('handleUpdate');
  //   onSubmit({ id: userToEdit.id, user: state });
  //   onClose();
  // };

  // console.log('initialstate', initialValues);

  return (
    // контрольована форма
    // форма має бути окремий компонентом зі своїм станом в якому зберігаються значення полів форми
    // onSubmit це проп який відповідає за відправку форми
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>{nameLabel}</label>
      <input
        type="text"
        id={nameInputId}
        name="name"
        // value={userToEdit?.name ?? name}
        value={state.name}
        onChange={handleChange}
        ref={inputRef}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // placeholder={nameLabel}
        // autoFocus
      />
      <br />
      <label htmlFor={phoneInputId}>{phoneLabel}</label>
      <input
        type="tel"
        id={phoneInputId}
        // value={userToEdit?.phone ?? phone}
        value={state.number}
        name="number"
        onChange={handleChange}
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <br />
      {/* <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={gender === 'male'}
          />
          Male
        </label>
        <br />
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={gender === 'female'}
          />
          Female
        </label>
        <br />
        <label>
          Choose course
          <select name="course" value={course} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
          </select>
        </label>
        <br />
        <label>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>
        <br /> */}
      <button disabled={state === initialValues || !state.name || !state.number}>{btnTitle}</button>
    </form>
  );
};

export default StudentsForm;
