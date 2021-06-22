import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import GenreList from './common/genreList';
import {paginate} from '../utils/paginate';

class Movies extends Component {
    state={
        movies: [],
        genres: [],
        pageSize: 5,
        currPage: 1,
        sortColumn : {column: 'title', order: 'asc'}
    }

    componentDidMount(){
      const genres = [{_id:"", name : "All Genres"}, ...getGenres()]
      this.setState({movies : getMovies(), genres });
    }

    handleDelete= (movie)=>{
      let movs = this.state.movies.filter(m=> m._id !== movie._id);
      this.setState({movies : movs}); // if movs is named as movies we can do {movies} only
    }

    handleLike = movie =>{
      const movies =[...this.state.movies];
      const index = movies.indexOf(movie);
      movies[index]= {...movies[index]}
      movies[index].liked = !movies[index].liked;
      this.setState({movies});
    }

    handlePageChange = page =>{
      this.setState({currPage : page});
    }

    handleGenreSelect = genre =>{
      this.setState({selectedGenre : genre, currPage : 1})
    }

    handleSort = sortCol =>{
      this.setState({sortColumn: sortCol});
    }

    getData = ()=>{
      let {currPage, pageSize, selectedGenre, movies:allMovies, sortColumn } = this.state;

      let filterMovieGenre = (selectedGenre && selectedGenre._id) ? allMovies.filter(m => m.genre._id === selectedGenre._id ) : allMovies;

      const orderedList = _.orderBy(filterMovieGenre, [sortColumn.column], [sortColumn.order]);

      let movies = paginate(orderedList,currPage,pageSize);

      return { allData : movies, filteredLength : filterMovieGenre.length}
    }

    render() {
      let {length : movieCount } = this.state.movies;
      let {currPage, pageSize, genres, sortColumn } = this.state;

      if(movieCount === 0)
        return <h5>No movie in database remain.</h5>

      const { allData:movies, filteredLength: dataLength} = this.getData();

      return (
          <div className="row">
            <div className="col-3">
            <GenreList
            items={genres}
            selectedItem = {this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            ></GenreList>
            </div>
            <div className="col">
                <Link to="/movies/new" className="btn btn-primary">
                  New Movie
                </Link>
                <h5> showing {dataLength} movies in database:</h5>
                <hr></hr>

                <MoviesTable
                movies = {movies}
                sortColumn = {sortColumn}
                handleLike = {this.handleLike}
                handleDelete = {this.handleDelete}
                handleSort = {this.handleSort}
                ></MoviesTable>


              <Pagination
              items={dataLength}
              pageSize= {pageSize}
              currPage= {currPage}
              onPageChange = {this.handlePageChange}
              ></Pagination>
            </div>
        </div>
      );
    }
}

export default Movies;