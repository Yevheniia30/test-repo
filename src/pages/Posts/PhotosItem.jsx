import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid;
  border-radius: 3px;
  padding: 15px;
  &:hover {
    transform: scale(1.1);
    transition: 1s ease;
  }
`;

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
        <Item>
          <img src={thumbnailUrl} alt={title} onClick={this.handleOpen} />
          <p>{title}</p>
        </Item>
        {isOpen && (
          <Modal onClose={this.handleOpen}>
            <img src={url} alt={title} />
            <p>{title}</p>
          </Modal>
        )}
      </>
    );
  }
}

export default PhotosItem;
