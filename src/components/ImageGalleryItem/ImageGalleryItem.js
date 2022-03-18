import React from 'react';
import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onClickImg }) => (
  <li className={styles.ImageGalleryItem} key={id}>
    <img
      src={webformatURL}
      alt=""
      width="300px"
      className={styles.ImageGalleryItemImage}
      onClick={() => onClickImg(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClickImg: PropTypes.func,
};

export default ImageGalleryItem;
