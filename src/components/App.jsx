import { menuConfig } from 'data/menu';
import Sidebar from './Sidebar/Sidebar';
import Paper from './Paper/Paper';
import Card from './Card/Card';
import Main from './Main/Main';
import school from '../assets/school.jpg';
import TutorsList from './TutorsList/TutorsList';
import data from '../data/data.json';
import CitiesList from './CitiesList/CitiesList';
import DepartmentList from './DepartmentList/DepartmentList';
import Description from './Description/Description';

export const App = () => {
  console.log('data', data);

  return (
    <div
      style={{
        // maxWidth: '1200px',
        // height: '100vh',
        // height: '100%',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 24,
        color: '#010101',
        // flexDirection: 'column',
      }}
    >
      <Sidebar menu={menuConfig} />
      <Main>
        <Paper>
          <Card image={school} title="MIT" />
          <Description />
        </Paper>
        {/* <Paper></Paper> */}

        <TutorsList tutors={data.tutors} />
        <CitiesList cities={data.cities} />
        <DepartmentList departments={data.department} />
      </Main>
    </div>
  );
};
