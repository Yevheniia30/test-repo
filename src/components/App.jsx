// import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
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
import Students from './Students/Students';
import Posts from './Posts/Posts';

// const AppWrapper = styled.div`
//   margin: ${({ theme }) => theme.spaces[0]} auto;
//   width: ${({ theme }) => theme.width.xl}px;
// `;

export const App = () => {
  // console.log('article', article);
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Box m={5} width="xl">
        {/* <Posts /> */}
        <Students />
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
        <Statistics stats={data} />
        <Statistics title="Main statistics" stats={data} />
        <hr />
        <ForbesList list={forbes} />
        <TransactionHistory items={items} />
      </Box>
    </ThemeProvider>
  );
};
