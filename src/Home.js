import React, {Component} from 'react';
import cities from './cities';
import {Link} from 'react-router-dom';

function Home(props){
    var cityArray = []
    cities.map((city,index)=>{
    cityArray.push(<li key={index}><Link to={`/city/${city.yearRank}`}>{city.city}</Link> - Population: {city.lastCensus}</li>)
    })
    return(

        <div>
            <ul>
                {cityArray}
            </ul>
        </div>
    )
}

export default Home;