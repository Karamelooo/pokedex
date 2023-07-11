import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Call from '../functions/Call';
import SearchCity from '../functions/SearchCity';

const WeatherDisplay = ({search}) => {

    const API_key = 'c9bfdbc4d3561d06143cfa790cced76a';
    console.log(search);
    const target = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`;

    const data = Call(target);
    console.log(data)

    if(data.main) {
        return (    
            <>
                <p>{data.main.temp}</p>
            </>
        )
    }
    else {
        return (    
            <>
                <p>{data}</p>
            </>
        )
    }
}

export default WeatherDisplay;