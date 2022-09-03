import { menuConfig } from 'data/menu';
import Sidebar from './Sidebar/Sidebar';
import Paper from './Paper/Paper';
import Card from './Card/Card';
import Main from './Main/Main';
import school from '../assets/school.jpg';
import TutorsList from './TutorsList/TutorsList';
import data from '../data/data.json';
import CitiesList from './CitiesList/CitiesList';

export const App = () => {
  console.log('data', data);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Sidebar menu={menuConfig} />
      <Main>
        <Paper>
          <Card image={school} title="MIT" />
        </Paper>
        <Paper>
          <p>
            Опыт, концентрат знаний и возможность избежать большинство ошибок
            при приеме на работу. Мы знаем, что хотят большинство локальных и
            иностранных компаний и можем вам это дать. А еще мы постоянно
            совершенствуем наши курсы программирования, добавляя туда что-то
            новое. Вы можете лично ознакомиться с историями успеха наших
            выпускников, чтобы убедиться в эффективности нашей методики
            обучения. Да, мы начнем с азов и самой простой информации. Знаем,
            что большинство людей приходят к нам с нулевыми знаниями.{' '}
          </p>
        </Paper>
        <TutorsList tutors={data.tutors} />
        <CitiesList cities={data.cities} />
      </Main>
    </div>
  );
};
