import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    // Use Bootstrap's row with responsive column gutters
    <div className="row g-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;