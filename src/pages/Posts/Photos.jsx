// import axios from 'axios';
import { fetch } from 'services/photos';
import Button from 'components/Button/Button';
import { Component } from 'react';
import PhotosList from './PhotosList';
import PhotosSearch from './PhotosSearch';

class Photos extends Component {
  state = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
  };

  //   search by q

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
    //   .then(response => response.json())
    //   .then(res => {
    //     this.setState({
    //       photos: res,
    //     });
    //   });
    // this.setState({
    //   loading: true,
    //   //   error: null,
    // });
    // axios('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=12')
    //   .then(({ data }) => {
    //     this.setState({
    //       photos: data,
    //     });
    //   })
    //   .catch(err => {
    //     // console.log('err', err);
    //     this.setState({
    //       error: err,
    //     });
    //   })
    //   .finally(() =>
    //     this.setState({
    //       loading: false,
    //     })
    //   );
    this.fetchPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    // if (prevState.page !== page) {
    //   this.setState({
    //     loading: true,
    //     //   error: null,
    //   });
    //   axios(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`)
    //     .then(({ data }) => {
    //       this.setState(prev => ({
    //         photos: [...prev.photos, ...data],
    //       }));
    //     })
    //     .catch(err => {
    //       // console.log('err', err);
    //       this.setState({
    //         error: err,
    //       });
    //     })
    //     .finally(() =>
    //       this.setState({
    //         loading: false,
    //       })
    //     );
    // }
    if (prevState.page !== page) {
      this.fetchPhotos();
    }
  }

  //   винесли метод
  //   then
  //   fetchPhotos() {
  //     const { page, photos } = this.state;
  //     this.setState({
  //       loading: true,
  //       //   error: null,
  //     });
  //     axios(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`)
  //       .then(({ data }) => {
  //         this.setState({
  //           photos: [...photos, ...data],
  //         });
  //       })
  //       .catch(err => {
  //         // console.log('err', err);
  //         this.setState({
  //           error: err,
  //         });
  //       })
  //       .finally(() =>
  //         this.setState({
  //           loading: false,
  //         })
  //       );
  //   }
  //   async await
  async fetchPhotos() {
    const { page } = this.state;
    try {
      //   const { data } = await axios(
      //     `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
      //   );
      //   винесли запит окремо
      const data = await fetch(page);
      this.setState(prev => ({
        photos: [...prev.photos, ...data],
      }));
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmit = () => {};

  handleLoadMore = () =>
    this.setState(prev => ({
      page: prev.page + 1,
    }));

  render() {
    const { photos, loading, error } = this.state;
    return (
      <>
        <PhotosSearch onSubmit={this.handleSubmit} />
        <PhotosList photos={photos} />
        {loading && <b>.....Loader</b>}
        {error && <p>{error.message}</p>}
        {photos?.length > 0 && <Button propClick={this.handleLoadMore}>Load more</Button>}
      </>
    );
  }
}

export default Photos;
