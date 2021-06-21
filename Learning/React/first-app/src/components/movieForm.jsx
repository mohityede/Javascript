import React from 'react';

const MovieForm = (props) => {
    return (
        <>
        <h3>Movie Id : {props.match.params.id}</h3>
        <button className="btn btn-primary" onClick={()=> props.history.push('/movies')}>Save</button>
        </>
    )
}

export default MovieForm;