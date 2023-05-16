// import { css } from "styled-components";
import {format} from 'date-fns'
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>PRICE</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({id, price, amount, date})=>{
            return(
            <tr key={id} className={css.row}>
                            <td>{id}</td>

            <td>{price}</td>
            <td>{amount}</td>
            <td>{format(new Date(date), 'MM/dd/yyyy')}</td>
            </tr>
            )
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
