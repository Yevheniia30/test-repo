// const obj = { a: 1, b: 3, c: 8 };
// const arrOne = [
//   { a: 9, id: '123' },
//   { b: 12, id: '456' },
// ];

// const objTwo = { ...obj, ...arrOne };
// console.log('objTwo', objTwo);

// console.log(obj === objTwo);

// const arrTwo = [...arrOne, obj];
// console.log('arrTwo', arrTwo);
// // const { tutors, cities, departments } = this.state;

// // find min and max
// const arr = [5, 8, 123, 12, 19, 2, 0, 5, 1];

// const getMinAndMax = () => {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }
//   return `min: ${min}, max: ${max}`;
// };

// console.log('getMinAndMax', getMinAndMax());

// const salaries1 = {
//   Manager: { salary: 1000, tax: '10%' },
//   Designer: { salary: 600, tax: '30%' },
//   Artist: { salary: 1500, tax: '15%' },
// };
// const team1 = [
//   { name: 'Misha', specialization: 'Manager' },
//   { name: 'Max', specialization: 'Designer' },
//   { name: 'Vova', specialization: 'Designer' },
//   { name: 'Leo', specialization: 'Artist' },
// ];

export const calculateTeamFinanceReport = (salaries, team) => {
  const spec = team.reduce((acc, { specialization }) => {
    if (!Object.hasOwn(acc, specialization)) acc[specialization] = 0;
    if (salaries[specialization]) {
      const { salary, tax } = salaries[specialization];
      const taxCo = 1 + parseFloat(tax) / 100;
      acc[specialization] += Math.round(salary * taxCo);
    }
    return acc;
  }, {});
  const updSpec = Object.fromEntries(
    Object.entries(spec).map(item => ['totalBudget' + item[0], item[1]])
  );

  const totalBudgetTeam = Object.values(spec).reduce((acc, value) => acc + value, 0);
  return { totalBudgetTeam, ...updSpec };
};

export const calculateTeamFinanceReport1 = (salaries, team) => {
  const spec = team.reduce((acc, { specialization }) => {
    if (!Object.hasOwn(acc, specialization)) acc[specialization] = 0;
    if (salaries[specialization]) {
      const { salary, tax } = salaries[specialization];
      const taxCo = 1 + parseFloat(tax) / 100;
      acc[specialization] += Math.round(salary * taxCo);
    }
    return acc;
  }, {});

  // const updSpec = Object.entries(spec);
  const newSpec = Object.entries(spec).map(item => ['totalBudget' + item[0], item[1]]);
  console.log('newSpec', newSpec);
  const updSpec = Object.fromEntries(
    Object.entries(spec).map(item => ['totalBudget' + item[0], item[1]])
  );

  const totalBudgetTeam = Object.values(spec).reduce((acc, value) => acc + value, 0);
  return { totalBudgetTeam, ...updSpec };
};
// const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
// console.log(JSON.stringify(financeReport1));

// const salaries2 = {
//   TeamLead: { salary: 1000, tax: '99%' },
//   Architect: { salary: 9000, tax: '34%' },
// };
// const team2 = [
//   { name: 'Alexander', specialization: 'TeamLead' },
//   { name: 'Gaudi', specialization: 'Architect' },
//   { name: 'Koolhas', specialization: 'Architect' },
//   { name: 'Foster', specialization: 'Architect' },
//   { name: 'Napoleon', specialization: 'General' },
// ];
// const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
// console.log(JSON.stringify(financeReport2));
