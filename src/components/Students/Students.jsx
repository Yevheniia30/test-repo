import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { addUser, deleteUser, getUser } from '../../services/api';

import StudentsForm from './StudentsForm/StudentsForm';
import StudentsList from './StudentsList/StudentsList';
import { nanoid } from 'nanoid';

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
// const INITIAL_STATE = {
//   login: "",
//   email: "",
//   password: "",
// };

const Students = () => {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) ?? [];
  });
  // const [users, setUsers] = useState([])
  // const [users, setUsers] = useState([])
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const parsed = JSON.parse(localStorage.getItem('users'));
  //   if (parsed?.length) {
  //     setUsers(parsed);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleSubmit = userData => {
    setUsers(prev => [userData, ...prev]);
  };

  const handleDelete = useCallback(id => {
    setUsers(prev => prev.filter(item => item.id !== id));
  }, []);

  // ================CLASS==================
  // state = {
  //   users: [],
  //   loading: false,
  //   error: null,
  //   page: 1,
  // };

  // componentDidMount() {
  //   localStorage.getItem('users');
  //   const parsedUsers = JSON.parse(localStorage.getItem('users'));
  //   parsedUsers?.length &&
  //     this.setState({
  //       users: parsedUsers,
  //     });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { users } = this.state;
  //   if (prevState.users !== users) {
  //     localStorage.setItem('users', JSON.stringify(users));
  //   }
  // }

  // componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts', {
  //       params: {
  //         _page: 1,
  //         // _limit: 6,
  //       },
  //     })
  //     .then(({ data }) =>
  //       this.setState({
  //         users: data,
  //       })
  //     )
  //     .catch(error =>
  //       this.setState({
  //         error,
  //       })
  //     )
  //     .finally(() =>
  //       this.setState({
  //         loading: false,
  //       })
  //     );
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.page !== this.state.page) {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts', {
  //         params: {
  //           _page: this.state.page,
  //           // _limit: 6,
  //         },
  //       })
  //       .then(({ data }) =>
  //         this.setState(prev => ({
  //           users: [...prev.users, ...data],
  //         }))
  //       );
  //   }
  // }

  // componentDidMount() {
  //   getUser();
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         users: data,
  //       })
  //     )
  //     .catch(err => console.log('err', err))
  //     .finally();
  // }

  // handleSubmitFromApi = async userData => {
  //   const newUser = { ...(await addUser(userData)), id: nanoid() };

  //   // console.log('newuser', newUser);
  //   this.setState(prev => ({
  //     users: [...prev.users, newUser],
  //   }));
  // };

  // контрольована форма
  // const handleSubmit = userData => {
  //   // e.preventDefault();
  //   // const { name, phone } = this.state;
  //   this.setState(prev => ({
  //     users: [userData, ...prev.users],
  //   }));
  //   // this.setState({
  //   //   name: '',
  //   //   phone: '',
  //   // });
  // };

  // onLoadMore = () => {
  //   this.setState(prev => ({
  //     page: prev.page + 1,
  //   }));
  // };

  // render() {
  // const { handleSubmit } = this;
  // const { users, error, loading } = this.state;

  console.log('students', users);

  return (
    <>
      <StudentsForm onSubmit={handleSubmit} />
      {/* {loading && <p>....loading</p>} */}
      {/* {error && <p>{error.message}</p>} */}
      {users?.length ? (
        <>
          <StudentsList students={users} title="Students" onDelete={handleDelete} />
          {/* <button type="button" onClick={this.onLoadMore}>
            Load more
          </button> */}
        </>
      ) : (
        <p>There are no students </p>
      )}
    </>
  );
};

// name, phone, gender, course, agreed

export default Students;
