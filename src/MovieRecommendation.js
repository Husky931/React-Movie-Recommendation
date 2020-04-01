import React from 'react'
import './App.css'

import { Movie } from './components/Movie'
import BottomContainer from './components/BottomContainer'


import { movieArray } from './propTypes/propTypes'

export default function MovieRecommendation({actionList, comedyList, horrorList,
                                            romanceList, dramaList, thrillerList}) {


    return (
        <>
            <div id='mainContainer'>
                <Movie initialMovies={actionList} header={'action'} />

                <Movie initialMovies={comedyList} header={'comedy'} />

                <Movie initialMovies={horrorList} header={'horror'} />

                <Movie initialMovies={romanceList} header={'romance'} />

                <Movie initialMovies={dramaList} header={'drama'} />

                <Movie initialMovies={thrillerList} header={'thriller'} />
            </div>
            
            <div id='bottomContainer'>
                <BottomContainer />
            </div>

        </>
    )
}

MovieRecommendation.propTypes = {
    initialMovies: movieArray
}