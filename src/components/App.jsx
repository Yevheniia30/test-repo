
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
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

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    } else {
      console.log('filter filter');
      const normalized = filter.toLowerCase();
      return contacts.filter(item =>
        item.name.toLowerCase().includes(normalized)
      );
    }
  };

  render() {
    const { filter } = this.state;
    const { handleSubmit, handleDelete, handleFilter } = this;

    const filteredContacts = this.getFilteredContacts();
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
import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { theme } from '../themes/theme';

import article from 'data/article.json';
import data from 'data/data.json';
import forbes from 'data/forbes.json';
import items from 'data/transactions.json';

import { BlogCard } from './BlogCard/BlogCard';

import FormikForm from './FormikForm/FormikForm';
import { Statistics } from './Statistics/Statistics';
import { ForbesList } from './ForbesList/ForbesList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { Box } from './Box/Box.styled';
import { Basket } from './Basket/Basket';
import Students from 'pages/Students/Students';
import Posts from 'pages/Posts/Posts';
import LangSwitcher from './LangSwitcher/LangSwitcher';

import { LangContext } from 'context/LangContext';

import { LangProvider } from 'context/LangContext';
import NavBar from './NavBar/NavBar';
import Home from '../pages/Home/Home';
import SignupPage from 'pages/SignupPage/SignupPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import PostPage from 'pages/PostPage/PostPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { calculateTeamFinanceReport } from 'javascript/javascript';
//
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/authOperations';
import Photos from 'pages/Posts/Photos';
import Clock from './Clock/Clock';
import HeroesPage from 'pages/HeroesPage/HeroesPage';
import HeroPage from 'pages/HeroPage/HeroPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import BasketPage from 'pages/BasketPage/BasketPage';
import SummaryPage from 'pages/SummaryPage/SummaryPage';
// export const LangContext = createContext('UA');
// const AppWrapper = styled.div`
//   margin: ${({ theme }) => theme.spaces[0]} auto;
//   width: ${({ theme }) => theme.width.xl}px;
// `;

// const routes = [
//   { path: '/', element: <Home /> },
//   { path: '/posts', element: <Posts /> },
//   { path: '/posts/:id', element: <PostPage /> },
//   { path: '/users', element: <Students /> },
//   { path: '/register', element: <RegisterPage /> },
//   { path: '/login', element: <Login /> },
//   // { path: '*', element: <NotFoundPage /> },
//   { path: '*', element: <Navigate to="/" /> },
// ];

export const App = () => {
  // const [lang, setLang] = useState('UA');
  // console.log('article', article);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('dispatch(current');
    dispatch(current());
  }, [dispatch]);

  // const salaries1 = {
  //   Manager: { salary: 1000, tax: '10%' },
  //   Designer: { salary: 600, tax: '30%' },
  //   Artist: { salary: 1500, tax: '15%' },
  // };
  // const team1 = [
  //   { name: 'Misha', specialization: 'Manager' },
  //   { name: 'Max', specialization: 'Designer' },
  //   { name: 'Vova', specialization: 'Designer' },
  //   { name: 'Leo', specialization: 'Artist' },
  // ];
  // const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
  // console.log(JSON.stringify(financeReport1));

  // const salaries2 = {
  //   TeamLead: { salary: 1000, tax: '99%' },
  //   Architect: { salary: 9000, tax: '34%' },
  // };
  // const team2 = [
  //   { name: 'Alexander', specialization: 'TeamLead' },
  //   { name: 'Gaudi', specialization: 'Architect' },
  //   { name: 'Koolhas', specialization: 'Architect' },
  //   { name: 'Foster', specialization: 'Architect' },
  //   { name: 'Napoleon', specialization: 'General' },
  // ];
  // const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
  // console.log(JSON.stringify(financeReport2));

  // console.log('calculateTeamFinanceReport', calculateTeamFinanceReport(salaries1, team1));

  return (
    <LangProvider>
      {/* <LangContext.Provider value="ua"> */}
      <ThemeProvider theme={theme}>
        {' '}
        <Box m={5} width="l">
          <NavBar />
          {/* <Students /> */}
          {/* <Clock /> */}
          {/* <Photos /> */}
          {/* <Posts /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route element={<PrivateRoute />}>
              {/* <Route path="/users" element={<Students />} /> */}
              <Route path="/products" element={<ProductPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/heroes" element={<HeroesPage />} />
              <Route path="/heroes/:id" element={<HeroPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/formik" element={<FormikForm />} />
            <Route path="/summary" element={<SummaryPage />} />

            {/* <Route path="/heroes" element={<HeroesPage />} /> */}
            {/* <Route path="/heroes/:id" element={<HeroPage />} /> */}

            {/* <Route path="*" element={<Navigate to="/" />} /> */}

            {/* <Home /> */}
            {/* <Students /> */}
            {/* <FormikForm /> */}

            {/* <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />
        <hr /> */}
            {/* <GoodsList /> */}
            {/* <Basket /> */}

            {/* <hr /> */}
            {/* <ForbesList list={forbes} /> */}
            {/* <TransactionHistory items={items} /> */}
          </Routes>
          {/* <BlogCard {...article} /> */}
          {/* <Statistics /> */}
          {/* <Statistics title="Main statistics" stats={data} /> */}
          {/* <ForbesList list={forbes} /> */}
        </Box>
      </ThemeProvider>
      {/* </LangContext.Provider> */}
    </LangProvider>
  );
};

