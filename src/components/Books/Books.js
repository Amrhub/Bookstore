/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Books = () => (
  <main className="books-container">
    <h1 className="sr-only">Books</h1>
    <ul className="books-list">
      <li className="book">
        <div className="book-info">
          <span className="book-category">Category</span>
          <h2 className="book-title">The Lord of the Rings</h2>
          <p className="book-author">J.R.R. Tolkien</p>
        </div>
        <div className="book-crud">
          <button type="button" className="btn">
            Comments
          </button>
          <button type="button" className="btn">
            Remove
          </button>
          <button type="button" className="btn">
            Edit
          </button>
        </div>
      </li>

      <li className="book">
        <div className="book-info">
          <span className="book-category">Category</span>
          <h2 className="book-title">The Lord of the Rings</h2>
          <p className="book-author">J.R.R. Tolkien</p>
        </div>
        <div className="book-crud">
          <button type="button" className="btn">
            Comments
          </button>
          <button type="button" className="btn">
            Remove
          </button>
          <button type="button" className="btn">
            Edit
          </button>
        </div>
      </li>
    </ul>

    <form className="book-form">
      <label htmlFor="book-title" className="sr-only">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="book-title"
        placeholder="Title"
      />
      <label htmlFor="book-category" className="sr-only">
        Category
      </label>
      <select className="form-control" id="book-category">
        <option>Category</option>
        <option>Category 1</option>
        <option>Category 2</option>
      </select>
      <button type="submit" className="btn-primary btn-submit">
        add book
      </button>
    </form>
  </main>
);

export default Books;
