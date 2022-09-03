import React from 'react';
import PropTypes from 'prop-types';
import { TutorStyled, TutorItem } from './TutorStyled';

const Tutor = ({ tutor }) => {
  const { firstName, lastName, patronymic, phone, email, city, options } =
    tutor;
  return (
    <>
      <TutorStyled>
        <TutorItem>
          <p>{firstName}</p>
          <p>{patronymic}</p>
          <p>{lastName}</p>
        </TutorItem>
        <TutorItem>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{city}</p>
        </TutorItem>
        <TutorItem> {options}</TutorItem>
      </TutorStyled>
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
