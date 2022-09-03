import React from 'react';
import PropTypes from 'prop-types';
import City from 'components/City/City';
import { nanoid } from 'nanoid';
import Button from 'components/Button/Button';

const CitiesList = ({ cities }) => {
  return (
    <>
      <h3>Cities</h3>
      <ul>
        {cities.map(city => (
          <City key={nanoid(4)} city={city} />
        ))}
      </ul>
      <Button text="Add city" />
    </>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default CitiesList;
