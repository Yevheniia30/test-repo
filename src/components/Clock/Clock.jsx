import { useState, useEffect, useRef } from 'react';
import Button from 'components/Button/Button';

const Clock = () => {
  // new date викличеться один раз
  const [time, setTime] = useState(() => new Date());
  console.log('time', time);

  //   let intervalId = null;
  //   userefвикликається 1 раз при першому рендері і створює об'єкт з властивістю карент, тому в властивість карент записуємо те значення яке потрібно зберігати між різними рендерами, можна міняти карент між рендерами і не втрачати його значення між рендерами
  const intervalId = useRef(null);

  //   при першому рендері треба запутстити годинник
  useEffect(() => {
    // intervalId = setInterval(() => {
    //   setTime(new Date());
    // }, 1000);
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => stop();
  }, []);

  const start = () => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
  };

  // при виході з сторінки треба зупинити годинник

  //   функція що призупиняє годинник
  const stop = () => {
    console.log('stop');
    clearInterval(intervalId.current);
    intervalId.current = null;
  };
  //   якщо це змінна то вона завжди буде налл, так як в функції вона створюється заново на кожному рендері
  console.log('intervalid', intervalId);
  return (
    <div>
      <p>Current time{time.toLocaleTimeString()}</p>
      <Button propClick={stop}>Stop</Button>
      <Button propClick={start}>Start</Button>
      {/* <button onClick={stop}>stop</button> */}
    </div>
  );
};

export default Clock;
