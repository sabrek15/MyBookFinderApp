import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    // Replaced all Bootstrap grid classes with our own
    <form onSubmit={handleSubmit} className="search-form">
        <div className="search-bar-wrapper">
            <div className="input-group input-group-lg">
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., The Lord of the Rings"
                    aria-label="Book title"
                />
                <button className="btn btn-primary" type="submit">Search</button>
            </div>
        </div>
    </form>
  );
};

export default SearchBar;