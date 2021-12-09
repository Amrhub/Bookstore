import _ from 'lodash';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const APP_ID = 'R8J1j82iESbbKkWiu7Ig';
const APIURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK: {
      const newState = _.filter(state, (book) => book.id !== payload.id);
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
