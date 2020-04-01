import React, { useState } from 'react'

import { movieArray, checkIfFunction } from '../propTypes/propTypes'

// import { useFormHooks } from '../customHook/formHook'

export const MovieForm = ({ addMovie, state}) => {

     const [form, setform] = useState({
         name: '',
         year: '',
         rating: ''
     })

    const updateForm = (e, max, min) => {
            setform(
                {
                    ...form,
                    [e.target.name]: (e.target.type === 'number') ? Number(e.target.value) : e.target.value
                })  
            }
    const updateRating = (e, min, max) => {
        const allowedNumbers = new RegExp(/^(?:[1-9]|0[1-9]|10)$/)

        setform({
            ...form,
            rating: allowedNumbers.test(e.target.value) ? e.target.value : e.target.value < min ? e.target.min : e.target.value > max ? e.target.max : ''
        })
    }

   

    const activateAddMovie = () => {
        addMovie(form)

        setform({
            name: '',
            year: '',
            rating: ''
        })
    }

    const addButonEnable = ((form.name.length < 1) || (form.year.length < 1) || (form.rating.length < 1)) ? true : false  

    if (state.length === 5) {
        return (
            <>
            </>
        )
    }
    else {
        return (

            <form>
                <label htmlFor='give-name'>Name</label>
                <input id='give-name' type='text' name='name' onChange={updateForm} value={form.name} maxLength='50' />

                <label htmlFor='give-year'>Year</label>
                <input id='give-year' type='number' name='year' onChange={updateForm} value={form.year}  />

                <label htmlFor='give-rating'>Rating</label>
                <input id='give-rating' type='number' onChange={updateRating} value={form.rating} min='1' max='10' />

                <button type='button' onClick={activateAddMovie}  disabled={addButonEnable} > Add </button>
                
            </form>
        )
    }
}

MovieForm.propTypes = {
    state: movieArray,
    addMovie: checkIfFunction
}

