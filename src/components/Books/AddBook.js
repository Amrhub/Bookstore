/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBookApi } from '../../redux/books/books';
import './Books.scss';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.category.value,
    };

    dispatch(addBookApi(newBook));
    e.target.title.value = '';
    e.target.category.value = '';
  };
  return (
    <>
      <h1 className="form-heading">Add New Book</h1>
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
          data-flexGrow="2"
          required
        />
        <label htmlFor="book-category" className="sr-only">
          category
        </label>
        <input
          type="text"
          className="form-control"
          id="book-category"
          placeholder="category"
          name="category"
          data-flexGrow="1"
          required
        />

        <button type="submit" className="btn btn-primary btn-submit">
          add book
        </button>
      </form>
    </>
  );
};
export default AddBook;
