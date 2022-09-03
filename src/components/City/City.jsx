import React from 'react';
import PropTypes from 'prop-types';

const City = ({ city }) => {
  return <p>{city}</p>;
};

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
