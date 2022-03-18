import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ picturesList, onClickImg }) => (
  <ul className={styles.ImageGallery}>
    {picturesList.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        id={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onClickImg={onClickImg}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  picturesList: PropTypes.array,
  onClickImg: PropTypes.func,
};

export default ImageGallery;
