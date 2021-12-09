import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from '../../redux/books/books';
import AddBook from './AddBook';
import BookButton from './BookButton';
import BookInfo from './BookInfo';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.books);
  return (
    <main className="books-container">
      <h1 className="sr-only">Books</h1>
      <ul className="books-list">
        {books.length ? (
          books.map((book) => (
            <li className="book" data-id={book.id} key={book.id}>
              <BookInfo title={book.title} category={book.category} />
              <BookButton />
            </li>
          ))
        ) : (
          <p>No books to display, please add one </p>
        )}
      </ul>

      <AddBook />
    </main>
  );
};
export default Books;
