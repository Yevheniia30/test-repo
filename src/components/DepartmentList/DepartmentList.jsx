import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const DepartmentList = ({ departments }) => {
  return (
    <ul>
      {departments.map(item => (
        <li key={nanoid(4)}>{item.name}</li>
      ))}
    </ul>
  );
};

DepartmentList.propTypes = {};

export default DepartmentList;
