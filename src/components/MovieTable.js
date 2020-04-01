import React, { useState } from 'react'

import { MovieEditRow } from './MovieEditRow'

import { movieArray, checkIfFunction } from '../propTypes/propTypes'

export default function MovieTable({state, removeMovie, 
                            setState, updatestate, setFlipEdit, flipEdit}) {

    const [editRowKey, setEditRowKey] = useState('')

    const activateRemoveMovie = (movieId) => {
        removeMovie(movieId)
    }

    const flipEditfFunction = (clickedKey) => {
        setFlipEdit(true)
        setEditRowKey(clickedKey)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Rating 1-10</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {state.length === 0 && 
                <tr>
                <td id='emptyRowsText' colSpan='6'>Please insert a movie</td> 
                </tr> }
                {flipEdit ?
                    <MovieEditRow state={state} editRowKey={editRowKey}
                        removeMovie={removeMovie} setEditRowKey={setEditRowKey}
                        setState={setState} flipEditfFunction={flipEditfFunction}
                        setFlipEdit={setFlipEdit} updatestate={updatestate} />
                    :
                    state.map((p, i) =>
                        <tr key={p.id}>
                            <td>{i + 1}</td>
                            <td className='colorIt' id='tdName' >{p.name}</td>
                            <td className='colorIt'>{p.year}</td>
                            <td className='ratingTable'>{p.rating}</td>
                            <td>
                                <button onClick={() => flipEditfFunction(p.id)} >Edit</button>
                                <button onClick={() => activateRemoveMovie(p.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

 MovieTable.propTypes = {
     state: movieArray,
     removeMovie: checkIfFunction,
     setState: checkIfFunction,
     updatestate: checkIfFunction
 }

