import PropTypes from 'prop-types';
// import { useContext } from 'react';
// import { LangContext } from 'context/LangContext';
import StudentsListItem from '../StudentsListItem/StudentsListItem';
// import { useSelector } from 'react-redux/es/exports';

const StudentsList = ({ title, students, onDelete, onUpdate }) => {
  // const contextValue = useContext(LangContext);
  // const { lang } = useContext(LangContext);
  // console.log('contextValue', contextValue, 'lang', lang);
  //
  // const students1 = useSelector(state => state.users);
  return (
    <>
      {' '}
      <h3>{title}</h3>
      <ul>
        {students.map(item => (
          <li key={item.id}>
            <StudentsListItem {...item} onDelete={onDelete} onUpdate={onUpdate} />
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      agreed: PropTypes.bool,
      gender: PropTypes.string,
      course: PropTypes.string,
    })
  ),
};

export default StudentsList;
