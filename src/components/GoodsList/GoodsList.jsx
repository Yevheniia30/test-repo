import { Component } from 'react';
import { Item } from './GoodsList.styled';
class GoodsList extends Component {
  state = {
    activeIndex: null,
  };

  static defaultProps = {
    goodsList: [
      {
        id: 1,
        name: 'apple',
      },
      {
        id: 2,
        name: 'orange',
      },
      {
        id: 3,
        name: 'cheese',
      },
      {
        id: 4,
        name: 'fish',
      },
    ],
  };

  static propTypes = {};

  handleClick = i => {
    this.setState({
      activeIndex: i,
    });
  };

  render() {
    const { goodsList } = this.props;
    return (
      <ul>
        {goodsList.map((item, i) => (
          <Item
            key={item.id}
            onClick={() => this.handleClick(i)}
            active={i === this.state.activeIndex}
          >
            {item.name}
          </Item>
        ))}
      </ul>
    );
  }
}

export default GoodsList;
