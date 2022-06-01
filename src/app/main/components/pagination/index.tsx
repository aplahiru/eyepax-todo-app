import React from "react";
import "../../../styles/Pagination.css";
import leftArrow from "../../../assets/left-arrow.png";
import rightArrow from "../../../assets/right-arrow.png";

export interface postProps {
  postsPerPage: any;
  totalPosts: number;
  paginate: (side: string) => void;
  currentPage: number;
}
const Pagination: React.FunctionComponent<postProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
    
  const handlePreviousPage = () => {
    
    paginate('previous');
  };

  const handleNextPage = () => {
    paginate('next');
  };

  return (
    <nav>
      <div
        className="pagination"
      >
        <button
          className="page-item"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <img
            className="img-style"
            src={leftArrow}
            alt="left arrow"
          />
        </button>
        <button
          className="page-item"
        >
          {currentPage}
        </button>
        <button
          className="page-item"
          onClick={handleNextPage}
          disabled={currentPage === totalPosts}
        >
          <img
            className="img-style"
            src={rightArrow}
            alt="right arrow"
          />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
