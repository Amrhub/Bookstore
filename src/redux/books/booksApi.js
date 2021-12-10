import _ from 'lodash';

const APP_ID = 'R8J1j82iESbbKkWiu7Ig';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

export default class BooksApi {
  static getAllBooks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const books = [];
    _.forEach(data, ([book], key) => {
      books.push({
        id: key,
        ...book,
      });
    });
    return books;
  };

  static postBook = async (book) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(book),
    });
  };

  static deleteBook = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
  };
}
