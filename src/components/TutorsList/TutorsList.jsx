import React from 'react';
import PropTypes from 'prop-types';
import Tutor from 'components/Tutor/Tutor';
import { nanoid } from 'nanoid';
import Button from 'components/Button/Button';
import { Section } from 'shared/styled/Section';

const TutorsList = ({ tutors }) => {
  console.log('tutors', tutors);
  return (
    <Section>
      <h3>Tutors</h3>
      <ul>
        {tutors.map(tutor => (
          <Tutor key={nanoid(4)} tutor={tutor} />
        ))}
      </ul>
      <Button text="Add tutor" />
    </Section>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TutorsList;
