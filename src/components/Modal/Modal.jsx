import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { GrClose } from 'react-icons/gr';
import { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

// console.log('document', window);

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
    // if (this.props.image) {
    body.style.overflow = 'hidden';
    // }
    // if (!isOpen) body.style.overflow = 'auto';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
    body.style.overflow = 'auto';
  }

  handleClose = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  // componentDidUpdate() {
  //   console.log('componentDidUpdate modal');
  // }
  // handleCloseOnOverlay = e => {
  //   console.log('etarget', e.target, e.currentTarget);
  //   if (e.target === e.currentTarget) {
  //     this.props.onClose();
  //   }
  // };

  render() {
    const { children, onClose } = this.props;
    // const modalRoot = document.getElementById('modal-root');

    return createPortal(
      //  першим аргументом передаємо що вставити, а другим - куди вставити
      <div className={s.Overlay} onClick={this.handleClose}>
        <div className={s.Modal}>
          {/* <button className={s.btn} onClick={onClose}>
            <GrClose className={s.icon} />
          </button> */}
          {children}
          <AiOutlineClose className={s.icon} fill="red" onClick={onClose} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
};
