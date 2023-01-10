import { Component } from 'react';

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
        <button type="button"></button>
        <button type="button"></button>
        <button type="button"></button>

        <p>
          total: <span>{this.handleTotal()}</span>
        </p>
      </>
    );
  }
}
