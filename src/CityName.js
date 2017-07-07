import React, {Component} from 'react';
import cities from './cities';

function CityName(props){
    var cityIndex = props.match.params.cityName -1;
    return(
        <div>
            <div>City: {cities[cityIndex].city}</div>
            <div>State: {cities[cityIndex].state}</div>
            <div>Estimated population: {cities[cityIndex].yearEstimate}</div>
            
        </div>
    )
}


export default CityName;