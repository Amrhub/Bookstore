import _ from 'lodash';
import BooksApi from './booksApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_SUCCEEDED = 'bookStore/books/FETCH_BOOKS_SUCCEEDED';
const FETCH_BOOKS_FAILED = 'bookStore/books/FETCH_BOOKS_FAILED';

const initialState = [];
const { getAllBooks } = BooksApi;

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  try {
    const books = await getAllBooks();
    dispatch({
      type: FETCH_BOOKS_SUCCEEDED,
      payload: books,
    });
  } catch (e) {
    dispatch({
      type: FETCH_BOOKS_FAILED,
    });
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK: {
      const newState = _.filter(state, (book) => book.id !== payload.id);
      return newState;
    }
    case FETCH_BOOKS_SUCCEEDED:
      return payload;
    case FETCH_BOOKS_FAILED:
      return state;
    default:
      return state;
  }
};

export default reducer;
