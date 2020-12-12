import React from "react";
import "./Pagination.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // push on the index in the pageNumbers[]
    //and this will give us ther page number
    pageNumbers.push(i);
  }

  return (
    <div className="pagination__container">
      <nav className="pagination_nav">
        <ul className="pagination_listItem">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="pagination_page">
              <a
                onClick={() => paginate(pageNumber)}
                href="!#"
                className="page-link"
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
