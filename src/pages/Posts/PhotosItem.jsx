import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

class PhotosItem extends Component {
  state = { isOpen: false };
  handleOpen = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
      //   isOpen: true,
    }));
  };

  render() {
    const { thumbnailUrl, url, title } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <li onClick={this.handleOpen}>
          <img src={thumbnailUrl} alt={title} />
          <p>{title}</p>
        </li>
        {isOpen && (
          <Modal onClose={this.handleOpen}>
            <img src={url} alt={title} />
          </Modal>
        )}
      </>
    );
  }
}

export default PhotosItem;
