const Pagination = ({ currentPage, totalResults, onPageChange, pageSize }) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav aria-label="Book search results navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </button>
        </li>

        {/* Optional: Add a page number display */}
        <li className="page-item disabled">
            <span className="page-link">{currentPage} of {totalPages}</span>
        </li>
        
        <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;