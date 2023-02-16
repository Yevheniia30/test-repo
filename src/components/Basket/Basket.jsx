import { Component } from 'react';
import Button from 'components/Button/Button';

export class Basket extends Component {
  state = {
    cap: 0,
    glass: 8,
    table: 0,
  };

  handleTotal() {
    const { cap, glass, table } = this.state;
    return cap + glass + table;
  }

  render() {
    return (
      <>
        <Button type="button"></Button>
        <Button type="button"></Button>
        <Button type="button"></Button>

        <p>
          total: <span>{this.handleTotal()}</span>
        </p>
      </>
    );
  }
}
