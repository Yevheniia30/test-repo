import PropTypes from 'prop-types';
import { useForm } from 'hooks/useForm';
import Button from 'components/Button/Button';
import { Component } from 'react';

const initialValues = {
  search: '',
};

const PhotosSearch = ({ onSubmit }) => {
  const { handleChange, handleSubmit, state } = useForm(onSubmit, initialValues);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={state.search}
        onChange={handleChange}
        placeholder="enter search..."
        name="search"
      />
      <Button disabled={!state.search.trim()} type="submit">
        Search
      </Button>
    </form>
  );
};

// class PhotosSearch extends Component {
//   static defaultProps = {
//     onSubmit: () => {},
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = {
//     search: '',
//   };

//   handleChange = e => {
//     this.setState({
//       search: e.target.value,
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.search);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.search}
//           onChange={this.handleChange}
//           placeholder="enter search..."
//         />
//         <Button disabled={!this.state.search} type="submit">
//           Search
//         </Button>
//       </form>
//     );
//   }
// }

export default PhotosSearch;
