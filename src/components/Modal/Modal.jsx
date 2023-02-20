import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { GrClose } from 'react-icons/gr';
import { Component } from 'react';

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
    // console.log('etarget', e.target, e.currentTarget);
    // if (e.target === e.currentTarget) {
    //   this.props.onClose();
    //   return;
    // }
    if (e.code === 'Escape') {
      this.props.onClose();
      // return;
    }
  };

  handleCloseOnOverlay = e => {
    console.log('etarget', e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children, onClose } = this.props;
    // const modalRoot = document.getElementById('modal-root');

    return createPortal(
      <div className={s.Overlay} onClick={this.handleCloseOnOverlay}>
        <div className={s.Modal}>
          {/* <button className={s.btn} onClick={onClose}>
            <GrClose className={s.icon} />
          </button> */}
          {children}
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
