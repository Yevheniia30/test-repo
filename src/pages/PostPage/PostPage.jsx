import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PostPage = () => {
  console.log('useparams', useParams());
  const { id } = useParams();

  // функція примусово змінює адресу
  const navigate = useNavigate();

  // переміщує на один крок назад
  // можна передати адресу
  // const goBack = () => navigate('/');
  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      PostPage {id}
    </div>
  );
};

export default PostPage;
