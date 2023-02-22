// import axios from 'axios';
import { fetch } from 'services/photos';
import Button from 'components/Button/Button';
import React, { Component } from 'react';
import PhotosList from './PhotosList';
import PhotosSearch from './PhotosSearch';

const element = document.getElementById('btn');

class Photos extends Component {
  state = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    q: '',
    limit: 12,
    isBtnVisible: true,
    status: 'idle',
  };
  listRef = React.createRef();

  //   search by q

  componentDidMount() {
    // window.addEventListener('scroll', this.onScroll);
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
    console.log('componentDidUpdate photos');
    const { page, q } = this.state;
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
    if (prevState.page < page || prevState.q !== q) {
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
    const { page, q, limit } = this.state;
    try {
      this.setState({ status: 'pending' });
      //   const { data } = await axios(
      //     `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
      //   );
      //   винесли запит окремо
      const data = await fetch(page, q);
      // if (data?.length < limit) {
      //   this.setState({
      //     isBtnVisible: false,
      //   });
      // }
      this.setState(prev => ({
        photos: [...prev.photos, ...data],
        status: 'success',
      }));
      setTimeout(() => {
        this.onScroll();
      }, 1000);
      // element.scrollIntoView();
      // window.scrollTo(element);
    } catch (error) {
      this.setState({
        error: error.message || 'smth went wrong',
        status: 'error',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmit = query => {
    if (query === this.state.q) {
      return;
    }
    this.setState({
      q: query,
      photos: [],
      page: 1,
      isBtnVisible: true,
    });
  };

  handleLoadMore = () =>
    this.setState(prev => ({
      page: prev.page + 1,
    }));

  onScroll() {
    // console.log(
    //   'document.documentElement.scrollHeight',
    //   document.documentElement.scrollHeight,
    //   window.innerHeight,
    //   window.scrollY
    // );
    window.scroll({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth',
    });
  }

  render() {
    console.log('listref', this.listRef);
    console.log('element', element);

    const { photos, status, error, isBtnVisible, q } = this.state;
    return (
      <div ref={this.listRef}>
        <PhotosSearch onSubmit={this.handleSubmit} />
        {photos.length > 0 && <PhotosList photos={photos} />}
        {status === 'success' && !photos.length && <p>Nothing was found with name {q}</p>}
        {status === 'pending' && <b>.....Loader</b>}
        {status === 'error' && error && <p>{error.message}</p>}
        {photos?.length > 0 && isBtnVisible && (
          <Button propClick={this.handleLoadMore}>Load more</Button>
        )}
      </div>
    );
  }
}

export default Photos;

// toggle = newValue => {
//   this.setState({
//     isOpen: newValue,
//   });
// };

// <button onClick={this.toggle(true)}></button>
// <button onClick={this.toggle(false)}></button>
