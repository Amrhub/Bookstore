import PropTypes from 'prop-types';

const BookInfo = ({ title, category }) => (
  <div className="book-info">
    <span className="book-category">Category</span>
    <h2 className="book-title">{title}</h2>
    <p className="book-category">{category}</p>
  </div>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookInfo;
