import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/">To Home </Link>
    </>
  );
};

export default NotFoundPage;
