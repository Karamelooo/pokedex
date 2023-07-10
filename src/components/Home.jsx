import Data from '../data/pokedex.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Column from './Column';

const Home = () => {
    const [random, setRandom] = useState(Math.floor(Math.random() * 151));
    const reroll = () => {
        setRandom(Math.floor(Math.random() * 151));
    };
    return (
        <>
            <Column>
                Bienvenue sur le Pokédex !
                <br />
                <Link to={`/Pokemon/${random}`}>
                    Découvrir un Pokémon aléatoire
                </Link>
            </Column>
        </>
    );
};
export default Home;
