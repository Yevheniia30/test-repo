import { fetch } from 'services/photos';
import Button from 'components/Button/Button';
import React, { useState, useEffect } from 'react';
import PhotosList from './PhotosList';
import PhotosSearch from './PhotosSearch';
import PhotosView from './PhotosView';

const Photos = () => {
  const [status, setStatus] = useState('idle');
  const [photos, setPhotos] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   console.log('first');
  //   const fetchPhotos = async () => {
  //     try {
  //       setStatus('pending');
  //       const data = await fetch();
  //       setPhotos(prev => [...prev, ...data]);
  //       setStatus('success');
  //       setTimeout(() => {
  //         onScroll();
  //       }, 1000);
  //     } catch (error) {
  //       setError(error.message || 'smth went wrong');
  //       setStatus('error');
  //     } finally {
  //       // setStatus('idle');
  //     }
  //   };
  //   fetchPhotos();
  // }, []);

  useEffect(() => {
    console.log('next');
    const fetchPhotos = async () => {
      try {
        setStatus('pending');
        const data = await fetch(page, q);
        setPhotos(prev => (page === 1 ? data : [...prev, ...data]));
        setStatus('success');
        setTimeout(() => {
          onScroll();
        }, 1000);
      } catch (error) {
        setError(error.message || 'smth went wrong');
        setStatus('error');
      } finally {
        // setStatus('idle');
      }
    };
    fetchPhotos();
  }, [page, q]);

  const handleSubmit = ({ search }) => {
    if (search === q) {
      return;
    }
    setQ(search);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  function onScroll() {
    window.scroll({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth',
    });
  }

  console.log('RENDER', status, photos);

  return (
    <>
      <PhotosSearch onSubmit={handleSubmit} />
      {photos.length > 0 && <PhotosList photos={photos} />}
      {status === 'success' && !photos.length && <p>Nothing was found with name {q}</p>}
      {status === 'pending' && <PhotosView limit={limit} q={q} />}
      {status === 'error' && error && <p>{error.message}</p>}
      {photos?.length > 0 && <Button propClick={handleLoadMore}>Load more</Button>}
    </>
  );
};

// ===========CLASS==========//
// class Photos extends Component {
//   state = {
//     photos: [],
//     // loading: false,
//     error: null,
//     page: 1,
//     q: '',
//     limit: 12,
//     // isBtnVisible: true,
//     status: 'idle',
//   };
//   listRef = React.createRef();

//   //   search by q

//   componentDidMount() {
//     // window.addEventListener('scroll', this.onScroll);
//     // fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
//     //   .then(response => response.json())
//     //   .then(res => {
//     //     this.setState({
//     //       photos: res,
//     //     });
//     //   });
//     // this.setState({
//     //   loading: true,
//     //   //   error: null,
//     // });
//     // axios('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=12')
//     //   .then(({ data }) => {
//     //     this.setState({
//     //       photos: data,
//     //     });
//     //   })
//     //   .catch(err => {
//     //     // console.log('err', err);
//     //     this.setState({
//     //       error: err,
//     //     });
//     //   })
//     //   .finally(() =>
//     //     this.setState({
//     //       loading: false,
//     //     })
//     //   );
//     this.fetchPhotos();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('componentDidUpdate photos');
//     const { page, q } = this.state;
//     // if (prevState.page !== page) {
//     //   this.setState({
//     //     loading: true,
//     //     //   error: null,
//     //   });
//     //   axios(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`)
//     //     .then(({ data }) => {
//     //       this.setState(prev => ({
//     //         photos: [...prev.photos, ...data],
//     //       }));
//     //     })
//     //     .catch(err => {
//     //       // console.log('err', err);
//     //       this.setState({
//     //         error: err,
//     //       });
//     //     })
//     //     .finally(() =>
//     //       this.setState({
//     //         loading: false,
//     //       })
//     //     );
//     // }
//     if (prevState.page < page || prevState.q !== q) {
//       this.fetchPhotos();
//     }
//   }

//   //   винесли метод
//   //   then
//   //   fetchPhotos() {
//   //     const { page, photos } = this.state;
//   //     this.setState({
//   //       loading: true,
//   //       //   error: null,
//   //     });
//   //     axios(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`)
//   //       .then(({ data }) => {
//   //         this.setState({
//   //           photos: [...photos, ...data],
//   //         });
//   //       })
//   //       .catch(err => {
//   //         // console.log('err', err);
//   //         this.setState({
//   //           error: err,
//   //         });
//   //       })
//   //       .finally(() =>
//   //         this.setState({
//   //           loading: false,
//   //         })
//   //       );
//   //   }
//   //   async await
//   async fetchPhotos() {
//     const { page, q, limit } = this.state;
//     try {
//       this.setState({ status: 'pending' });
//       //   const { data } = await axios(
//       //     `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
//       //   );
//       //   винесли запит окремо
//       const data = await fetch(page, q);
//       // if (data?.length < limit) {
//       //   this.setState({
//       //     isBtnVisible: false,
//       //   });
//       // }
//       this.setState(prev => ({
//         photos: [...prev.photos, ...data],
//         status: 'success',
//       }));
//       setTimeout(() => {
//         this.onScroll();
//       }, 1000);
//       // element.scrollIntoView();
//       // window.scrollTo(element);
//     } catch (error) {
//       this.setState({
//         error: error.message || 'smth went wrong',
//         status: 'error',
//       });
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   }

//   handleSubmit = query => {
//     if (query === this.state.q) {
//       return;
//     }
//     this.setState({
//       q: query,
//       photos: [],
//       page: 1,
//       isBtnVisible: true,
//     });
//   };

//   handleLoadMore = () =>
//     this.setState(prev => ({
//       page: prev.page + 1,
//     }));

//   onScroll() {
//     // console.log(
//     //   'document.documentElement.scrollHeight',
//     //   document.documentElement.scrollHeight,
//     //   window.innerHeight,
//     //   window.scrollY
//     // );
//     window.scroll({
//       top: document.documentElement.scrollHeight - window.innerHeight,
//       behavior: 'smooth',
//     });
//   }

//   render() {
//     // console.log('listref', this.listRef);
//     // console.log('element', element);

//     const { photos, status, error, isBtnVisible, q, limit } = this.state;
//     return (
//       <>
//         <PhotosSearch onSubmit={this.handleSubmit} />
//         {photos.length > 0 && <PhotosList photos={photos} />}
//         {status === 'success' && !photos.length && <p>Nothing was found with name {q}</p>}
//         {status === 'pending' && <PhotosView limit={limit} q={q} />}
//         {status === 'error' && error && <p>{error.message}</p>}
//         {photos?.length > 0 && isBtnVisible && (
//           <Button propClick={this.handleLoadMore}>Load more</Button>
//         )}
//       </>
//     );
//   }
// }

export default Photos;

// toggle = newValue => {
//   this.setState({
//     isOpen: newValue,
//   });
// };

// <button onClick={this.toggle(true)}></button>
// <button onClick={this.toggle(false)}></button>
