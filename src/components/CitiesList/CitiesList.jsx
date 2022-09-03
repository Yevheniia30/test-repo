import React from 'react';
import PropTypes from 'prop-types';
import City from 'components/City/City';

const CitiesList = ({ cities }) => {
  return (
    <>
      <h3>Cities</h3>
      <ul>
        {cities.map(city => (
          <City city={city} />
        ))}
      </ul>
    </>
  );
};

CitiesList.propTypes = {};

export default CitiesList;
