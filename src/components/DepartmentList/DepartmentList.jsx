import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Button from 'components/Button/Button';

const DepartmentList = ({ departments }) => {
  return (
    <>
      <h3>Departments</h3>
      <ul>
        {departments.map(item => (
          <li key={nanoid(4)}>{item.name}</li>
        ))}
      </ul>
      <Button text="Add department" />
    </>
  );
};

DepartmentList.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default DepartmentList;
