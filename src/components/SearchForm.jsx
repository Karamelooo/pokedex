import WeatherDisplay from './WeatherDisplay';
import React, { useState } from 'react';

function SearchForm() {
    const [search, setSearch] = useState('');
    const Search = ({ search }) => {
        if (document.getElementById('search-city')) {
            setSearch(document.getElementById('search-city').value);
        }
        if (search) {
            return (
                <>
                    <WeatherDisplay search={search} />;
                </>
            );
        } else {
            return (
                <>
                    <WeatherDisplay search="Paris" />;
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
            <Search search={search} />;
        </>
    );
}

export default SearchForm;
