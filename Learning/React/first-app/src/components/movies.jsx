import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state={
        movies: getMovies()
    }

    handleDelete= (movie)=>{
      let movs = this.state.movies.filter(m=> m._id !== movie._id);
      this.setState({movies : movs}); // if movs is named as movies we can do {movies} only
    }

    render() {
      let {length : movieCount } = this.state.movies;

      if(movieCount === 0)
        return <h5>No movie in database remain.</h5>

        return (
            <>
            <h5> showing {movieCount} movies in database:</h5>
            <hr></hr>

            <table className="table table-striped">
              <thead className="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              {this.state.movies.map(i=>(

                  <tr key={i._id}>
                      <td>{i.title}</td>
                      <td>{i.genre.name}</td>
                      <td>{i.numberInStock}</td>
                      <td>{i.dailyRentalRate}</td>
                      <td><button onClick={()=> this.handleDelete(i)} className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>

              ))}
              </tbody>
            </table>
          </>
        );
    }
}

export default Movies;