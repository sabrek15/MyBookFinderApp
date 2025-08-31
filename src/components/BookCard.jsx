import { useState } from 'react';

const BookCard = ({ book }) => {
  // 1. Add state to track if this specific card is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
    : null;

  // Helper to get the first ISBN, as it's often an array
  const firstIsbn = book.isbn && book.isbn[0];

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
      {/* 2. Add mouse enter/leave event handlers to the card */}
      <div 
        className="card h-100 shadow-sm w-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 3. The Details Overlay - it's always in the HTML, but hidden/shown with CSS */}
        <div className={`book-card-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="overlay-content">
            <h5>Details</h5>
            {/* Show details only if they exist in the API response */}
            {book.author_name && <p>Author: {book.author_name.join(', ')}</p>}
            {book.first_publish_year && <p>Published: {book.first_publish_year}</p>}
            {book.publisher && <p>Publisher: {book.publisher[0]}</p>}
            {firstIsbn && <p>ISBN: {firstIsbn}</p>}
          </div>
        </div>
        
        {/* The existing card content remains below */}
        {coverUrl ? (
             <img src={coverUrl} className="card-img-top" alt={`${book.title} cover`} style={{ height: '320px', objectFit: 'cover' }} />
        ) : (
            <div className="d-flex align-items-center justify-content-center card-img-top bg-light" style={{ height: '320px'}}>
                <span className="text-muted">No Cover</span>
            </div>
        )}
       
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{book.title}</h5>
            {book.author_name && (
                <p className="card-text small text-muted mt-auto">
                    by {book.author_name.join(', ')}
                </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;