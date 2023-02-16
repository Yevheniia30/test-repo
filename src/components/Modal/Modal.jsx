import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { GrClose } from 'react-icons/gr';

export const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <button className={s.btn} onClick={onClose}>
          <GrClose className={s.icon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
};
