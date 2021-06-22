import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
import { getGenres } from '../../services/fakeGenreService';
import { saveMovie, getMovie } from '../../services/fakeMovieService';

class newMovie extends Form {
    state = {
        data : getMovie(this.props.match.params.id) ||
        {title: "", genre:"", numberInStock:"", dailyRentalRate:""},
        errors: {},
        genres: getGenres()
    }

    schema = {
        title: Joi.string().label('Title'),
        genre: Joi.string().label('Genre'),
        numberInStock: Joi.number().integer().min(0).max(10).label("NumberInStock"),
        dailyRentalRate: Joi.number().min(0).max(5).label("Rate")
    }

    doSubmit = ()=>{
        // call the server
        saveMovie(this.state.data);
        this.props.history.push('/movies')
        console.log("submitted",this.state.data)

    }

    render() {
        return (
            <div>
                <h1>Add Movie</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title","Title")}
                    {this.renderSelect("genre",this.state.genres,"Genre")}
                    {this.renderInput('numberInStock','Number In Stock')}
                    {this.renderInput("dailyRentalRate","Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        )
    }
}

export default newMovie;