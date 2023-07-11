import Data from '../data/pokedex.json';
import { Link } from 'react-router-dom';
import Column from '../components/Column';
import PokemonType from '../components/PokemonType';

const PokemonList = () => {
    return (
        <>
            {Data.map((pokemon) => (
                <Column key={pokemon.id} type={pokemon.type[0]}>
                    <ul>
                        <li>Pokémon n°{pokemon.id}</li>
                        <li>
                            <img
                                className="sprite"
                                src={`https://www.pokemontrash.com/pokedex/images/minixy/${pokemon.img}.png`}
                                alt={`Sprite de ${pokemon.name.french}`}
                            />
                        </li>
                        <li>
                            <Link to={`/Pokemon/${pokemon.id}`}>
                                {pokemon.name.french}
                            </Link>
                        </li>
                        <li>
                            <PokemonType pokemon={pokemon}/>
                        </li>
                    </ul>
                </Column>
            ))}
        </>
    );
};
export default PokemonList;
