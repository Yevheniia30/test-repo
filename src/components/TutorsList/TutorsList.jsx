import React from 'react';
import PropTypes from 'prop-types';
import Tutor from 'components/Tutor/Tutor';
import { nanoid } from 'nanoid';

const TutorsList = ({ tutors }) => {
  console.log('tutors', tutors);
  return (
    <>
      <h3>Tutors</h3>
      <ul>
        {tutors.map(tutor => (
          <Tutor key={nanoid(4)} tutor={tutor} />
        ))}
      </ul>
    </>
  );
};

TutorsList.propTypes = {};

export default TutorsList;
