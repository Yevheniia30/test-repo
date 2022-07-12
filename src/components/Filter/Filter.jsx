// import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ filter, onFilter }) => {
  return (
    <input
      className={s.filter}
      placeholder="Search contact..."
      value={filter}
      onChange={onFilter}
    />
  );
};

Filter.propTypes = {};
