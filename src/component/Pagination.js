import React from 'react';

const Pagination = ({recordsPerPage, totalRecords, paginate}) => {

    console.log(recordsPerPage);
    console.log(totalRecords);

    const pageNumbers = [];

    for (let i= 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log(pageNumbers);

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a href="#" className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;