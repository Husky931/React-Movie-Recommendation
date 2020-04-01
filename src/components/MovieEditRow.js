import React, { useState } from 'react'

import { movieArray, checkIfFunction, editRowKeyProp } from '../propTypes/propTypes'

export const MovieEditRow = ({ state, editRowKey, removeMovie,
    setEditRowKey, setFlipEdit, updatestate }) => {


    const [editRowFormInput, setEditRowFormInput] = useState({
        id: state.filter(p => p.id === editRowKey)[0].id,
        name: state.filter(p => p.id === editRowKey)[0].name,
        year: state.filter(p => p.id === editRowKey)[0].year,
        rating: state.filter(p => p.id === editRowKey)[0].rating,
    })

    const updateEditForm = (e) => {
        setEditRowFormInput({
            ...editRowFormInput,
            [e.target.name]: (e.target.type === 'number') ? Number(e.target.value) : e.target.value
        })
    }

    const activateRemoveMovieFromEdit = (movieId) => {
        removeMovie(movieId)
    }

    const activateSetEditRowKeyFromEdit = (clickedKey) => {
        setEditRowKey(clickedKey)

        setEditRowFormInput({
            id: state.filter(p => p.id === clickedKey)[0].id,
            name: state.filter(p => p.id === clickedKey)[0].name,
            year: state.filter(p => p.id === clickedKey)[0].year,
            rating: state.filter(p => p.id === clickedKey)[0].rating
        })
    }

    const editSaveButton = (i) => {
        const arrayCopy = [...state]
        arrayCopy.splice(i, 1, editRowFormInput)

        updatestate(arrayCopy)
        setFlipEdit(false)
    }

    const editCancelButton = () => {
        setFlipEdit(false)
    }

    return (
        <>
            {state.map((m, i) =>
                (m.id === editRowKey) ?
                    <tr key={m.id}>
                        <td>{i + 1}</td>
                        <td><input type='text' name='name' value={editRowFormInput.name} onChange={updateEditForm} /></td>
                        <td><input type='number' name='year' value={editRowFormInput.year} onChange={updateEditForm} /></td>
                        <td><input type='number' name='rating' value={editRowFormInput.rating} onChange={updateEditForm} /></td>
                        <td>
                            <button onClick={() => editSaveButton(i)}>Save</button>
                            <button onClick={() => editCancelButton()} >Cancel</button>
                        </td>
                    </tr>
                    :
                    <tr key={m.id}>
                        <td>{i + 1}</td>
                        <td>{m.name}</td>
                        <td>{m.year}</td>
                        <td>{m.rating}</td>
                        <td>
                            <button onClick={() => activateSetEditRowKeyFromEdit(m.id)} >Edit</button>
                            <button onClick={() => activateRemoveMovieFromEdit(m.id)} >Delete</button>
                        </td>
                    </tr>
            )
            }
        </>
    )
}

MovieEditRow.propTypes = {
    state: movieArray,
    setEditRowKey: checkIfFunction,
    editRowKey: editRowKeyProp,
    removeMovie: checkIfFunction,
    setFlipEdit: checkIfFunction,
    updatestate: checkIfFunction
}