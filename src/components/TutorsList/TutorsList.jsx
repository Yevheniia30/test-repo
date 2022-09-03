import React from 'react';
import PropTypes from 'prop-types';
import Tutor from 'components/Tutor/Tutor';

const TutorsList = ({ tutors }) => {
  console.log('tutors', tutors);
  return (
    <>
      <h3>Tutors</h3>
      <ul>
        {tutors.map(tutor => (
          <Tutor tutor={tutor} />
        ))}
      </ul>
    </>
  );
};

TutorsList.propTypes = {};

export default TutorsList;
