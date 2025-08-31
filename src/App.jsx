import { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import './custom.css';

function App() {
  // ... (all your existing state and functions remain the same) ...
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialState, setIsInitialState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [currentQuery, setCurrentQuery] = useState("");

  const handleSearch = async (query, page = 1) => {
    setIsInitialState(false);
    setIsLoading(true);
    setError(null);

    if (query !== currentQuery) {
      setCurrentQuery(query);
      setCurrentPage(1);
      setTotalResults(0);
      setBooks([]);
    }

    try {
      const limit = 20;
      const offset = (page - 1) * limit;
      const formattedQuery = query.split(' ').join('+');
      const response = await fetch(`https://openlibrary.org/search.json?title=${formattedQuery}&limit=${limit}&offset=${offset}`);
      
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      
      if (data.docs.length === 0) {
        if (page === 1) setError('No books found for your search.');
        setBooks([]);
      } else {
        setBooks(data.docs);
        setTotalResults(data.numFound);
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleSearch(currentQuery, newPage);
    window.scrollTo(0, 0);
  };
  
  const renderContent = () => {
    if (isLoading) return <div className="text-center p-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
    if (error) return <div className="alert alert-danger mt-4">{error}</div>;
    if (books.length > 0) return <BookList books={books} />;
    if (!isInitialState) return <p className="text-muted text-center mt-4">No results to display.</p>;
    return <p className="text-muted text-center mt-4">Type a book title above to start your search!</p>;
  };

  return (
    // The .container class is all we need for a top-aligned, horizontally centered layout.
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Book Finder</h1>
        <p className="lead text-muted">Your personal library assistant</p>
      </header>

      <main>
        <SearchBar onSearch={(query) => handleSearch(query, 1)} />

        <div className="results-container">
          {renderContent()}
        </div>
        
        {!isLoading && !error && books.length > 0 && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              currentPage={currentPage}
              totalResults={totalResults}
              onPageChange={handlePageChange}
              pageSize={20}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;