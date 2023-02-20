import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';

// import { addUser, deleteUser, getUser } from '../../services/api';

import StudentsForm from '../../components/StudentsForm/StudentsForm';
import StudentsList from 'components/StudentsList/StudentsList';
import { nanoid } from 'nanoid';

// import { LangContext } from 'context/LangContext';

import local from '../../local/local.json';

import { useLang } from 'hooks/useLang';
import { useSelector, useDispatch } from 'react-redux';
// import { addUser, filterUser, removeUser } from 'redux/actions';
// import { addUser, removeUser } from 'redux/users/actions';
// екшени із слайса
// import { addUser, removeUser } from 'redux/users/usersSlice';
import { filterUser } from 'redux/filter/actions';
// import { getFilter, getUsers } from 'redux/selectors';
import { getUsers, getError, getLoading } from 'redux/users/selectors';
import { getFilter } from 'redux/filter/selectors';
import { fetchUsers, addUserFunc, removeUser, updateUser } from 'redux/users/operations';
import { useAuth } from 'hooks/useAuth';

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
// const INITIAL_STATE = {
//   login: "",
//   email: "",
//   password: "",
// };

const Students = () => {
  // поверне value тобто ua
  // const { lang } = useContext(LangContext);
  const { lang } = useLang();

  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) ?? [];
  });

  const users1 = useSelector(state => state.users.users);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const isLogin = useAuth();
  // const users1 = useSelector(getUsers);

  // const [users, setUsers] = useState([])
  // const [users, setUsers] = useState([])
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const parsed = JSON.parse(localStorage.getItem('users'));
  //   if (parsed?.length) {
  //     setUsers(parsed);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  // викликаєм usedispatch i він нам повертає функцію dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = userData => {
    // console.log('userData', userData);
    // беремо дані які треба додати в стор, викликаєм екшен і передаєм їх в екшен, екшен повертає об'єкт і цей об'єкт передаєм в діспатч
    // і тоді діспатч викликає редюсер і передає в нього наш екшен
    // const action = addUser(userData);
    // console.log('action', action);
    // dispatch(addUser(userData));
    dispatch(addUserFunc(userData));
    // setUsers(prev => [userData, ...prev]);
  };

  const handleDelete = useCallback(
    id => {
      dispatch(removeUser(id));
      // dispatch(removeUser(id));
      // setUsers(prev => prev.filter(item => item.id !== id));
    },
    [dispatch]
  );

  const onFilter = e => {
    dispatch(filterUser(e.target.value));
  };

  const handleUpdate = ({ id, user }) => {
    console.log('id', id, 'user', user);
    dispatch(updateUser({ id, user }));
  };

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

  // спрацьовує лише коли змінюється або пропи, тому якщо в стейті тільки цей масив, перевірка не потрібно, а якщо є ще (як в дз) фільтр або якийсь інший стейт, то потрібно перевірити чи змінився саме масив
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

  // addUser=(data)=>{
  //   this.setState(prev=>{
  //     const new={
  //       id: nanoid(4),
  //       ...data
  //     }
  //     return {
  //       users: [prev.users, new]
  //     }
  //   })
  // }

  // onLoadMore = () => {
  //   this.setState(prev => ({
  //     page: prev.page + 1,
  //   }));
  // };

  // render() {
  // const { handleSubmit } = this;
  // const { users, error, loading } = this.state;

  // console.log('students', users);

  const title = local.title[lang];

  const filtered = () => {
    if (filter) {
      return users1.filter(item => item.name.includes(filter));
    }
    return users1;
  };

  return (
    <>
      <StudentsForm onSubmit={handleSubmit} />
      {/* {loading && <p>....loading</p>} */}
      {/* {error && <p>{error.message}</p>} */}
      {loading && <p>loading.....</p>}
      {error && <p>{error}</p>}
      {users1?.length ? (
        <>
          <input type="text" value={filter} onChange={onFilter} />
          <StudentsList
            students={filtered()}
            title={title}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
          {/* <button type="button" onClick={this.onLoadMore}>
            Load more
          </button> */}
        </>
      ) : (
        !loading && !error && <p>There are no students </p>
      )}
    </>
  );
};

// name, phone, gender, course, agreed

export default Students;

// i18n інтернационализация
