import Chart from 'components/Chart/Chart';
import colorsCollection from 'data/colors.json';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
  { name: 'Main expenses', value: 400 },
  { name: 'Products', value: 300 },
  { name: 'Car', value: 300 },
  { name: 'Self care', value: 200 },
];

const dataWithColors = data.map((item, idx) => {
  return { ...item, color: colorsCollection[item.name] };
});

const SummaryPage = () => {
  return (
    <div>
      <Chart data={dataWithColors} />
    </div>
  );
};

export default SummaryPage;
