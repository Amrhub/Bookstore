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

const middleWare = () => (dispatch) => {
  console.log('Hello');
  dispatch({
    type: ADD_BOOK,
    payload: { id: 1, title: 'book1', author: 'Here' },
  });
};
middleWare();
export const fetchBooks = async () => {
  try {
    console.log('Fetching...');
    const books = await getAllBooks();
    console.log('RESULTS', books);
    return (dispatch) => {
      console.log('FETCH_BOOKS_SUCCEEDED');
      _.forEach(books, (book) => {
        dispatch({
          type: FETCH_BOOKS_SUCCEEDED,
          payload: book,
        });
      });
    };
  } catch {
    return (dispatch) => {
      console.log('FETCH_BOOKS_FAILED');
      dispatch({
        type: FETCH_BOOKS_FAILED,
      });
    };
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      console.log('ADD_BOOK');
      return [...state, payload];
    case REMOVE_BOOK: {
      const newState = _.filter(state, (book) => book.id !== payload.id);
      return newState;
    }
    case FETCH_BOOKS_SUCCEEDED:
      console.log('FETCH_BOOKS_SUCCEEDED');
      return payload;
    case FETCH_BOOKS_FAILED:
      console.log('FETCH_BOOKS_FAILED');
      return state;
    default:
      return state;
  }
};

export default reducer;
