import Data from '../data/pokedex.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Column from '../components/Column';
import SearchForm from '../components/WeatherDisplay';
import WeatherDisplay from '../components/WeatherDisplay';
import Weather from './Weather';
import Call from '../functions/Call';

const Home = () => {
    const [random] = useState(Math.floor(Math.random() * 151));
    return (
        <>
            <Column>
                Bienvenue sur le Pokédex !
                <br />
                <Link to={`/Pokemon/${random}`}>
                    Découvrir un Pokémon aléatoire
                </Link>
            </Column>
            <Column>
                <Weather/>
            </Column>
            
        </>
    );
};
export default Home;
