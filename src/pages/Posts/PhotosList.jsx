import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PhotosItem from './PhotosItem';

class PhotosList extends Component {
  //   state = {
  //     isOpen: false,
  //   };

  //   handleOpen = () => {
  //     this.setState(prev => ({
  //       isOpen: !prev.isOpen,
  //     }));
  //   };

  render() {
    const { photos } = this.props;
    // const { isOpen } = this.state;
    return (
      <ul>
        {photos.map(item => (
          //   <li key={id} onClick={this.handleOpen}>
          //     <img src={thumbnailUrl} alt={title} />
          //     <p>{title}</p>
          //     {isOpen && (
          //       <Modal>
          //         <img src={url} alt={title} />
          //       </Modal>
          //     )}
          //   </li>
          <PhotosItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}

export default PhotosList;
