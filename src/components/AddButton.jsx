import React from 'react';

const AddButton = ({ myWatch, handleClickRemove, handleClickAdd }) => {
  return (
    <>
      {myWatch ? (
        <div className="Details-bookmark_container" onClick={handleClickRemove}>
          <img
            className="Details-bookmark"
            src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Fremove.svg?alt=media&token=4ff46288-6ba9-4c74-ab21-0d560fa6acae"
            alt="Watc Liast Icon"
          />
          <p className="Details-bookmark-text">Remove from my list</p>
        </div>
      ) : (
        <div className="Details-bookmark_container" onClick={handleClickAdd}>
          <img
            className="Details-bookmark"
            src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Fbookmark.svg?alt=media&token=84e4e49e-a3d0-4b60-bcf3-8b6cb38e8fd6"
            alt="Watc Liast Icon"
          />
          <p className="Details-bookmark-text">Add to my list</p>
        </div>
      )}
    </>
  );
};

export default AddButton;
