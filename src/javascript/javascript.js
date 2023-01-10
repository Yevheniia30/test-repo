const obj = { a: 1, b: 3, c: 8 };
const arrOne = [
  { a: 9, id: '123' },
  { b: 12, id: '456' },
];

const objTwo = { ...obj, ...arrOne };
console.log('objTwo', objTwo);

console.log(obj === objTwo);

const arrTwo = [...arrOne, obj];
console.log('arrTwo', arrTwo);
// const { tutors, cities, departments } = this.state;

// find min and max
const arr = [5, 8, 123, 12, 19, 2, 0, 5, 1];

const getMinAndMax = () => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return `min: ${min}, max: ${max}`;
};

console.log('getMinAndMax', getMinAndMax());
