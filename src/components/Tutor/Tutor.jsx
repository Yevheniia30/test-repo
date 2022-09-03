import React from 'react';
import PropTypes from 'prop-types';

const Tutor = ({ tutor }) => {
  const { firstName, lastName, patronymic, phone, email, city, options } =
    tutor;
  return (
    <ul>
      <li>
        Name: {firstName} {lastName} {patronymic}
      </li>
      <li>Phone: {phone}</li>
      <li>Email: {email}</li>
      <li>City: {city}</li>
      <li>Options: {options}</li>
    </ul>
  );
};

Tutor.propTypes = {};

export default Tutor;
