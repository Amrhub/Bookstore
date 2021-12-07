import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { removeBook } from '../../redux/books/books';

const BookButton = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const removeBookFromStore = (e) => {
    const listItem = e.target.parentNode.parentNode;
    const bookId = listItem.getAttribute('data-id');
    const book = _.find(books, { id: bookId });

    dispatch(removeBook(book));
  };

  return (
    <div className="book-functionality">
      <button type="button" className="btn">
        Comments
      </button>
      <button type="button" className="btn" onClick={removeBookFromStore}>
        Remove
      </button>
      <button type="button" className="btn">
        Edit
      </button>
    </div>
  );
};

export default BookButton;
