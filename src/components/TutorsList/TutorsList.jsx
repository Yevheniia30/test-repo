import React from 'react';
import PropTypes from 'prop-types';
import Tutor from 'components/Tutor/Tutor';

const TutorsList = ({ tutors }) => {
  console.log('tutors', tutors);
  return (
    <ul>
      {tutors.tutors.map(tutor => (
        <Tutor tutor={tutor} />
      ))}
    </ul>
  );
};

TutorsList.propTypes = {};

export default TutorsList;
