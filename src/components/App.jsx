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
import GoodsList from './GoodsList/GoodsList';
import Students from 'pages/Students/Students';
import Posts from 'pages/Posts/Posts';
import LangSwitcher from './LangSwitcher/LangSwitcher';

import { LangContext } from 'context/LangContext';

import { LangProvider } from 'context/LangContext';
import NavBar from './NavBar/NavBar';
import Home from '../pages/Home/Home';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import PostPage from 'pages/PostPage/PostPage';
import Login from 'pages/Login/Login';
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
// export const LangContext = createContext('UA');
// const AppWrapper = styled.div`
//   margin: ${({ theme }) => theme.spaces[0]} auto;
//   width: ${({ theme }) => theme.width.xl}px;
// `;

const routes = [
  { path: '/', element: <Home /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <PostPage /> },
  { path: '/users', element: <Students /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <Login /> },
  // { path: '*', element: <NotFoundPage /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const App = () => {
  // const [lang, setLang] = useState('UA');
  // console.log('article', article);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('dispatch(current');
  //   dispatch(current());
  // }, [dispatch]);

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
        <Box m={5} width="xl">
          <NavBar />
          {/* <Students /> */}
          {/* <Clock /> */}
          {/* <Photos /> */}
          {/* <Posts /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route element={<PrivateRoute />}>
              <Route path="/users" element={<Students />} />
            </Route> */}
            {/* <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<Login />} />
            </Route> */}

            <Route path="/heroes" element={<HeroesPage />} />
            <Route path="/heroes/:id" element={<HeroPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<Navigate to="/" />} />

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
