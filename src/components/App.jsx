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
  // { path: '*', element: <NotFoundPage /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const App = () => {
  // const [lang, setLang] = useState('UA');
  // console.log('article', article);
  return (
    <LangProvider>
      {/* <LangContext.Provider value="ua"> */}
      <ThemeProvider theme={theme}>
        {' '}
        <Box m={5} width="xl">
          <NavBar />
          {/* <Posts /> */}
          <Routes>
            {routes.map(item => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
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
            {/* <Statistics stats={data} /> */}
            {/* <Statistics title="Main statistics" stats={data} /> */}
            {/* <hr /> */}
            {/* <ForbesList list={forbes} /> */}
            {/* <TransactionHistory items={items} /> */}
          </Routes>
        </Box>
      </ThemeProvider>
      {/* </LangContext.Provider> */}
    </LangProvider>
  );
};
