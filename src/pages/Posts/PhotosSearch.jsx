import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { Component } from 'react';
class PhotosSearch extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="enter search..."
        />
        <Button disabled={!this.state.search} type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default PhotosSearch;
