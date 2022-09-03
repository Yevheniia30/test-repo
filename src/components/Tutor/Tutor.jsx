import React from 'react';
import PropTypes from 'prop-types';

const Tutor = ({ tutor }) => {
  const { firstName, lastName, patronymic, phone, email, city, options } =
    tutor;
  return (
    <>
      <ul>
        <li>
          Name: {firstName} {lastName} {patronymic}
        </li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
        <li>City: {city}</li>
        <li>Options: {options}</li>
      </ul>
    </>
  );
};

Tutor.propTypes = {
  tutor: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    options: PropTypes.string.isRequired,
  }),
};

export default Tutor;
