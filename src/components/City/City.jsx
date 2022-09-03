import React from 'react';
import PropTypes from 'prop-types';
import { CityStyled } from './CityStyled';
import { BsThreeDotsVertical } from 'react-icons/bs';

const City = ({ city }) => {
  return (
    <CityStyled>
      {city} <BsThreeDotsVertical style={{ cursor: 'pointer' }} />
    </CityStyled>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
