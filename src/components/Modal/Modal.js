import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ modalImage, onClose }) => (
  <div className={styles.Overlay} onClick={() => onClose()}>
    <div className={styles.Modal}>
      <img
        src={modalImage}
        alt={modalImage}
        width="700px"
        onClick={() => onClose()}
      />
    </div>
  </div>
);

Modal.propTypes = {
  modalImage: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
