import PropTypes from 'prop-types'

//THE TWO BELOW FOR THE 5 MOVIES ARRAY OF OBJECTS
export const movieObjectElement = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number
})
export const movieArray = PropTypes.arrayOf(movieObjectElement)


//BELOW TO CHECK IF FUNCTION
export const checkIfFunction = PropTypes.func.isRequired

export const editRowKeyProp = PropTypes.number