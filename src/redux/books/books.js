import _ from 'lodash';
import BooksApi from './booksApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_SUCCEEDED = 'bookStore/books/FETCH_BOOKS_SUCCEEDED';
const FETCH_BOOKS_FAILED = 'bookStore/books/FETCH_BOOKS_FAILED';

const initialState = [];
const { getAllBooks, postBook, deleteBook } = BooksApi;

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBookFailed = () => ({
  type: FETCH_BOOKS_FAILED,
});

export const fetchBooks = () => async (dispatch) => {
  try {
    const books = await getAllBooks();
    dispatch({
      type: FETCH_BOOKS_SUCCEEDED,
      payload: books,
    });
  } catch (e) {
    dispatch(fetchBookFailed());
  }
};

export const addBookApi = (book) => async (dispatch) => {
  try {
    await postBook(book);
    dispatch(addBook(book));
  } catch {
    dispatch(fetchBookFailed());
  }
};

export const removeBookApi = (bookId) => async (dispatch) => {
  try {
    deleteBook(bookId);
    dispatch(removeBook(bookId));
  } catch {
    dispatch(fetchBookFailed());
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK: {
      const newPayload = { id: payload.item_id, ...payload };
      return [...state, newPayload];
    }
    case REMOVE_BOOK: {
      const newState = _.filter(state, (book) => book.id !== payload);
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
