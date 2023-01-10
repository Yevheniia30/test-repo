import PropTypes from 'prop-types';
import StudentsListItem from '../StudentsListItem/StudentsListItem';

const StudentsList = ({ title, students, onDelete }) => {
  return (
    <>
      {' '}
      <h3>{title}</h3>
      <ul>
        {students.map(item => (
          <li key={item.id}>
            <StudentsListItem {...item} onDelete={onDelete} />
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

StudentsList.propTypes = {
  title: PropTypes.string,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      agreed: PropTypes.bool,
      gender: PropTypes.string,
      course: PropTypes.string,
    })
  ),
};

export default StudentsList;
