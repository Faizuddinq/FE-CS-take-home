import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
    const generatePageNumbers = () => {
      const pageNumbers = [];
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);
  
      if (currentPage <= 3) {
        endPage = Math.min(5, totalPages);
      }
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - 4, 1);
      }
  
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
  
      return pageNumbers;
    };
  
    return (
      <div className='flex '>
        <div className='flex pb-12  justify-between items-center mt-4'>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 hover:bg-gray-200  text-gray-500 disabled:cursor-not-allowed rounded disabled:opacity-50'
          >
            <FaAngleLeft/>
          </button>
          <div className='flex space-x-2'>
            
            {generatePageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 hover:bg-gray-200 rounded ${page === currentPage ? 'bg-violet-400 hover:bg-violet-500 text-white' : ' text-gray-800'}`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 hover:bg-gray-200 disabled:cursor-not-allowed text-gray-500 rounded disabled:opacity-50'
          >
            <FaAngleRight/>
          </button>
        </div>
      </div>
    );
  };

export default Pagination