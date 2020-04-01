import React, { useState } from 'react';

import {MovieForm} from './MovieForm'
import MovieTable from './MovieTable'

import {movieArray} from '../propTypes/propTypes'

export const  Movie = ({ initialMovies, header })  => {

    const [state, setState] = useState(initialMovies.concat())
    const [flipEdit, setFlipEdit] = useState(false)

    const addMovie = (thrillerForm) => {
        setState([
            ...state,
            {
                id: (state.length === 0) ? 1 : Math.max(...state.map(p => p.id + 1)),
                ...thrillerForm
            }
        ])
    }
 
    const removeMovie = (movieId) => {
        setState(
            state.filter(f => f.id !== movieId)
        )
    }

    const updatestate = (arrayCopy) => {
        setState(arrayCopy)
    }

    return (
        <div className='movieDiv'>
            <h3>Top 5 must see {header} movies</h3>
            <MovieTable state={state} removeMovie={removeMovie}
                setState={setState} updatestate={updatestate} 
                setFlipEdit={setFlipEdit} flipEdit={flipEdit} />
           
            < MovieForm addMovie={addMovie} state={state}
            flipEdit={flipEdit}  />
        </div>
    )
}

Movie.propTypes = {
    initialMovies: movieArray
}