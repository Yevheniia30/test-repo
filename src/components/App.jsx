import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleChangeName = e => {
    console.log('e name', e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleAdd = e => {
    e.preventDefault();
    console.log('e', e);
  };

  handleDelete = () => {};

  handleFilter = () => {};

  render() {
    const { contacts, name, number, filter } = this.state;
    const { handleAdd, handleDelete, handleFilter } = this;

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
        <ContactForm
          name={name}
          number={number}
          onAdd={handleAdd}
          onChangeName={this.handleChangeName}
          onChangeNumber={this.handleChangeNumber}
        />
        <Filter filter={filter} onFilter={this.handleChangeFilter} />
        <ContactList contacts={contacts} onDelete={handleDelete} />
      </div>
    );
  }
}
