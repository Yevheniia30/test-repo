import { Component } from 'react';
class PhotosSearch extends Component {
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
        <input type="text" value={this.state.search} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    );
  }
}

export default PhotosSearch;
