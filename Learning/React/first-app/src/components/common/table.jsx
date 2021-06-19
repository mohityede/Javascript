import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = (props) => {

    const { sortColumn, handleSort, columns, data, handleLike, handleDelete} = props

    return (
        <table className="table table-striped">
            <TableHeader
            sortColumn = {sortColumn}
            handleSort = {handleSort}
            columns = {columns}
            />
            <TableBody
            data= {data}
            columns = {columns}
            handleLike = {handleLike}
            handleDelete = {handleDelete}
            />
        </table>
    )
}

export default Table;