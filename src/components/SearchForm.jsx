import WeatherDisplay from './WeatherDisplay';
import React, { useState } from 'react';

function SearchForm() {
    const [search, setSearch] = useState('');
    const [measure, setMeasure] = useState('metric');
    const MeasureToggle = () => {
        if (measure == 'metric') {
            setMeasure('imperial');
        } else {
            setMeasure('metric');
        }
    };
    const Search = ({ search }) => {
        if (document.getElementById('search-city')) {
            setSearch(document.getElementById('search-city').value);
        }
        if (search) {
            return (
                <>
                    <WeatherDisplay search={search} measure={measure} />
                </>
            );
        } else {
            return (
                <>
                    <WeatherDisplay search="Paris" measure={measure} />
                </>
            );
        }
    };
    return (
        <>
            <div>
                <label htmlFor="search-city">Ville : </label>
                <input id="search-city" type="text" onChange={Search} />
            </div>
            <button id="toggle" onClick={MeasureToggle}>
                Changer la mesure
            </button>
            <Search search={search} />
        </>
    );
}

export default SearchForm;
