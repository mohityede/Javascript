// import React, {Component} from 'react';
import { Component } from 'react';
import Like from './common/like';
import Table from './common/table';


class MoviesTable extends Component {

    columns = [
        { column : 'title', label: 'Title'},
        { column : 'genre.name', label: 'Genre'},
        { column : 'numberInStock', label: 'Stock'},
        { column : 'dailyRentalRate', label: 'Rate'},
        { key: 'like', contant: i=> <Like onClick={()=> this.props.handleLike(i)} liked={i.liked}></Like>},
        { key: 'delete', contant: i=> <button onClick={()=> this.props.handleDelete(i)} className="btn btn-danger btn-sm">Delete</button>}
    ]

    render() {

        const {movies, handleLike, handleDelete, sortColumn, handleSort} = this.props;

        return (
            <Table
            sortColumn= {sortColumn}
            data= {movies}
            columns= {this.columns}
            handleDelete= {handleDelete}
            handleLike= {handleLike}
            handleSort= {handleSort}
            />
        )
    }
}

export default MoviesTable;