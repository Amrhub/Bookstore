import PropTypes from 'prop-types';

const BookInfo = ({ title, author }) => (
  <div className="book-info">
    <span className="book-category">Category</span>
    <h2 className="book-title">{title}</h2>
    <p className="book-author">{author}</p>
  </div>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;