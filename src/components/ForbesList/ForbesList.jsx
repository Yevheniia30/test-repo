import { FcBullish, FcBearish } from 'react-icons/fc';
import { BiDollarCircle } from 'react-icons/bi';

export const ForbesList = ({ list }) => {
  return (
    <>
      <h2>Forbes</h2>
      <h4>Leader board</h4>
      <ul>
        {list.map(({ id, name, capital, avatar, isIncrease }) => {
          return (
            <li key={id}>
              <img src={avatar} alt="name" />
              <p>{name}</p>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                {' '}
                <p>{capital}</p> <BiDollarCircle />
                {isIncrease ? <FcBullish /> : <FcBearish />}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// export default ForbesList;
