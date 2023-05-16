import { useState } from 'react';
import Button from 'components/Button/Button';

export const Basket = () => {
  // state = {
  //   cap: 0,
  //   glass: 8,
  //   table: 0,
  // };
  const [state, setState] = useState({
    cap: 0,
    glass: 0,
    table: 0,
  });
  const { cap, glass, table } = state;

  const addGood = name => {
    setState(prev => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const handleTotal = () => {
    return cap + glass + table;
  };

  const options = Object.keys(state);

  const [count, setCount] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'increment':
        setCount(prev => prev + 1);
        break;
      case 'decrement':
        setCount(prev => prev - 1);
        break;
      default:
        throw new Error();
    }
  };

  return (
    <>
      <p>Count: {count}</p>
      <Button name="decrement" propClick={handleClick}>
        -
      </Button>
      <Button name="increment" propClick={handleClick}>
        +
      </Button>
      {options.map(item => (
        <Button key={item} propClick={() => addGood(item)}>
          {item}
        </Button>
      ))}
      <p>Cap: {cap}</p>
      <p>Glass: {glass}</p>
      <p>Table: {table}</p>
      <p>
        total: <span>{handleTotal()}</span>
      </p>
    </>
  );
};
