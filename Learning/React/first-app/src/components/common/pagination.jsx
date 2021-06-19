import React from "react";
import _ from "lodash";

const Pagination = (props) =>{
    const {items, pageSize, onPageChange, currPage } = props

    const pageCount = Math.ceil(items/pageSize);
    if(pageCount <= 1) return null;

    const pages = _.range(1, pageCount+1)

    return (
        <nav aria-label="...">
        <ul className="pagination pagination-sm">

            {pages.map(page => (
                <li key={page} className={page === currPage ? "page-item active": "page-item"}>
                    <a onClick={()=> onPageChange(page)} className="page-link" >{page}</a>
                </li>
            ))}

        </ul>
        </nav>
    )
}

export default Pagination;