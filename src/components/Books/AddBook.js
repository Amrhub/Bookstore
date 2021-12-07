/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
    };

    dispatch(addBook(newBook));
    e.target.title.value = '';
    e.target.author.value = '';
  };
  return (
    <form className="book-form" onSubmit={submitBookToStore}>
      <label htmlFor="book-title" className="sr-only">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="book-title"
        placeholder="Title"
        name="title"
      />
      <label htmlFor="book-author" className="sr-only">
        Author
      </label>
      <input
        type="text"
        className="form-control"
        id="book-author"
        placeholder="Author"
        name="author"
      />
      <label htmlFor="book-category" className="sr-only">
        Category
      </label>
      <select className="form-control sr-only" id="book-category">
        <option>Category</option>
        <option>Category 1</option>
        <option>Category 2</option>
      </select>
      <button type="submit" className="btn-primary btn-submit">
        add book
      </button>
    </form>
  );
};
export default AddBook;
