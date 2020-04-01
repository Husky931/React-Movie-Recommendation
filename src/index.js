import React from 'react';
import ReactDOM from 'react-dom';
import MovieRecommendation from './MovieRecommendation';


const comedyList = [{ id: 1, name: 'Big daddy', year: 1999, rating: 7 }, { id: 2, name: "Hot shots", year: 1991, rating: 8}]
const actionList = [{ id: 1, name: 'Rambo', year: 1982, rating: 9 }, { id: 2, name: "John Wick 2", year: 2017, rating: 8}]
const horrorList = [{ id: 1, name: 'The ring', year: 2002, rating: 9 }, { id: 2, name: "The shining", year: 1980, rating: 10}]
const thrillerList = [{ id: 1, name: 'Shutter island', year: 2010, rating: 9 }, { id: 2, name: "Secret window", year: 2004, rating: 7}]
const romanceList = [{ id: 1, name: 'Notebook', year: 2004, rating: 6 }, { id: 2, name: "Titanic", year: 1997, rating: 8}]
const dramaList = [{ id: 1, name: 'The pianist', year: 2002, rating: 10 }, { id: 2, name: "A beautiful mind", year: 2001, rating: 8}]

ReactDOM.render(<MovieRecommendation actionList={actionList} comedyList={comedyList} horrorList={horrorList}
    romanceList={romanceList} dramaList={dramaList} thrillerList={thrillerList}
/>, document.getElementById('root'));


