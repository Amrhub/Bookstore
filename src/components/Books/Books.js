import React from 'react';
import { useSelector } from 'react-redux';

import AddBook from './AddBook';
import BookButton from './BookButton';
import BookInfo from './BookInfo';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <main className="books-container">
      <h1 className="sr-only">Books</h1>
      <ul className="books-list">
        {books.length ? (
          books.map((book) => (
            <li className="book" data-id={book.id} key={book.id}>
              <BookInfo title={book.title} author={book.author} />
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
