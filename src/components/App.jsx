import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Grid } from 'react-loader-spinner';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalHits, setTotalHits] = useState(null);

  const perPage = 12;

  const handleSubmit = inputValue => {
    setPictures([]);
    setPage(1);
    setInputValue(inputValue);
    setLoading(true);
    setTotalHits(0);

    if (inputValue === '') {
      setLoading(false);
      setTotalHits(0);
      return;
    }
  };

  async function fetchApi() {
    const URL_API = `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=24802256-ad66129038acba5a8b956a80c&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    await fetch(URL_API)
      .then(response => response.json())
      .then(pictures => {
        setPictures(prevState => [...prevState, ...pictures.hits]);
        setTotalHits(pictures.hits.length);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);
    fetchApi();
  }, [inputValue]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);
    fetchApi();
  }, [page]);

  const onSetPage = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setModalImage(largeImageURL);

    window.addEventListener('keydown', handleKeydown);
  };

  const closeModal = () => {
    setShowModal(false);

    window.removeEventListener('keydown', handleKeydown);
  };

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      console.log('close modal');
      closeModal();
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length === 0 && !loading ? (
        'Any results'
      ) : (
        <ImageGallery picturesList={pictures} onClickImg={openModal} />
      )}

      {loading && (
        <Grid height="100" width="100" color="grey" ariaLabel="loading" />
      )}

      {totalHits < perPage ? null : <Button onSetPage={onSetPage} />}

      {showModal && <Modal modalImage={modalImage} onClose={closeModal} />}
    </>
  );
}