import { Link } from 'react-router-dom';
import { useState } from 'react';
import Column from '../components/Column';
import Weather from './Weather';

const Home = () => {
    const [random] = useState(Math.floor(Math.random() * 151));
    return (
        <>
            <Column title="PokéReact">
                Bienvenue sur le Pokédex !
                <br />
                <Link to={`/Pokemon/${random}`}>
                    Découvrir un Pokémon aléatoire
                </Link>
            </Column>
            <Column title="Météo">
                <Weather />
            </Column>
        </>
    );
};
export default Home;
