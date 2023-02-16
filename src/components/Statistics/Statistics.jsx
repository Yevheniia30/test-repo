import { Component } from 'react';
import { FaUserFriends, FaShoppingBasket, FaTree } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
// import css from './Statistics.module.css';
import { Box } from 'components/Box/Box.styled';
import { List, Item } from './Statistics.styled';
import Button from 'components/Button/Button';

// const icons = [<BiLike />, <FaUserFriends />, <FaShoppingBasket />, <FaTree />];
const icons = [BiLike, FaUserFriends, FaShoppingBasket, FaTree];
// const Icon = BiLike;

export class Statistics extends Component {
  state = {
    isShow: true,
    activeIndex: null,
  };

  handleShowStats = () => {
    this.setState(prev => ({
      isShow: !prev.isShow,
    }));
  };

  handleClick = i => {
    this.setState({
      activeIndex: i,
    });
  };

  // handleClickOverlay = e => {
  //   console.log('e', e.target);
  //   e.target === e.currentTarget && this.setState({ activeIndex: null });
  // };

  render() {
    // console.log('stats', this.props.stats);
    const { title, stats } = this.props;
    return (
      <Box
        bg={title ? 'secondary' : 'muted'}
        color="primary"
        pt={5}
        // display="flex"
        flexWrap="wrap"
        justifyContent="center"
        onClick={this.handleClickOverlay}
      >
        {title && <h3>{title}</h3>}
        <Button propClick={this.handleShowStats}>{this.state.isShow ? 'Hide' : 'Show'}</Button>
        {this.state.isShow && (
          <List>
            {stats.map(({ id, total, title }, i) => {
              return (
                <Item
                  key={id}
                  onClick={() => this.handleClick(i)}
                  // onClick={this.handleClick}
                  active={i === this.state.activeIndex}
                >
                  {/* <Icon  /> */}
                  {icons.map((Icon, idx) => i === idx && <Icon />)}
                  {/* {icons[i]} */}
                  <p>{total}</p>
                  <p>{title}</p>
                </Item>
              );
            })}
          </List>
        )}
      </Box>
    );
  }
}

// export default Statistics;
Statistics.defaultProps = {
  stats: [],
};
