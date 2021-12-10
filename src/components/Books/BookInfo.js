import PropTypes from 'prop-types';

const BookInfo = ({ title, category }) => (
  <article className="book-info">
    <p className="book-category">{category}</p>
    <h2 className="book-title">{title}</h2>
    <span className="book-author">Author Name</span>
  </article>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookInfo;
