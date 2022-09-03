import React from 'react';
import PropTypes from 'prop-types';
import City from 'components/City/City';
import { nanoid } from 'nanoid';
import Button from 'components/Button/Button';
import { Section } from 'shared/styled/Section';
import { CitiesListStyled } from './CitiesListStyled';

const CitiesList = ({ cities }) => {
  return (
    <Section>
      <h3>Cities</h3>
      <CitiesListStyled>
        {cities.map(city => (
          <City key={nanoid(4)} city={city} />
        ))}
      </CitiesListStyled>
      <Button text="Add city" />
    </Section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default CitiesList;
