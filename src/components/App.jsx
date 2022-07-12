import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const addedName = contacts.find(item => item.name === name);
    const addedNumber = contacts.find(item => item.number === number);

    const contact = {
      id: nanoid(4),
      name,
      number,
    };

    addedName
      ? alert(`${name} is already in contacts with number ${addedName.number}`)
      : addedNumber
      ? alert(`${number} is already in contacts as ${addedNumber.name}`)
      : !name || !number
      ? alert('Сomplete all fields')
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item?.id !== id),
      };
    });
  };

  handleFilter = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleSubmit, handleDelete, handleFilter } = this;

    const normalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalized)
    );
    // console.log('contacts', contacts);
    // console.log('filteredContacts', filteredContacts);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          // fontSize: 40,
          color: '#010101',
          paddingTop: '30px',
        }}
      >
        <ContactForm onSubmit={handleSubmit} />
        <Filter filter={filter} onFilter={handleFilter} />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </div>
    );
  }
}
