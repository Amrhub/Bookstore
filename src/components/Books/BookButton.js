import React from 'react';
import { useDispatch } from 'react-redux';

import { removeBookApi } from '../../redux/books/books';

const BookButton = () => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    const listItem = e.target.parentNode.parentNode.parentNode;
    const bookId = listItem.getAttribute('data-id');

    dispatch(removeBookApi(bookId));
  };

  return (
    <div className="book-functionality">
      <button type="button" className="btn btn-book">
        Comments
      </button>
      <button
        type="button"
        className="btn btn-book"
        onClick={removeBookFromStore}
      >
        Remove
      </button>
      <button type="button" className="btn btn-book">
        Edit
      </button>
    </div>
  );
};

export default BookButton;
