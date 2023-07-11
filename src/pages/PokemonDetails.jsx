import Data from '../data/pokedex.json';
import { Link, useParams } from 'react-router-dom';
import Column from '../components/Column';
import PokemonType from '../components/PokemonType';

const PokemonDetails = () => {
    const { id } = useParams();
    const pokemon = Data.find((pokemon) => pokemon.id.toString() === id);
    if (pokemon) {
        return (
            <>
                <Column key={pokemon.id} type={pokemon.type[0]}>
                    <ul>
                        <li>Pokémon n°{pokemon.id}</li>
                        <li>
                            <strong>{pokemon.name.french}</strong>
                        </li>
                        <li>
                            <PokemonType pokemon={pokemon}/>
                        </li>
                        <li>Points de vie : {pokemon.base.HP}</li>
                        <li>Attaque : {pokemon.base.Attack}</li>
                        <li>Défense : {pokemon.base.Defense}</li>
                        <li>Attaque Spéciale : {pokemon.base.SpAttack}</li>
                        <li>Défense Spéciale : {pokemon.base.SpDefense}</li>
                        <li>Vitesse : {pokemon.base.Speed}</li>
                    </ul>
                </Column>
                <div className="artwork">
                    <img
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${pokemon.img}.png`}
                        alt={`Illustration de ${pokemon.name.french}`}
                    />
                    <nav>
                        <ul>
                            {(() => {
                                if (pokemon.id == 1) {
                                    return <li>Pas de précédent</li>;
                                } else {
                                    return (
                                        <li>
                                            <Link
                                                to={`/Pokemon/${
                                                    pokemon.id - 1
                                                }`}
                                            >
                                                Pokémon précédent (n°
                                                {pokemon.id - 1})
                                            </Link>
                                        </li>
                                    );
                                }
                            })()}
                            {(() => {
                                if (pokemon.id == 151) {
                                    return <li>Pas de suivant</li>;
                                } else {
                                    return (
                                        <li>
                                            <Link
                                                to={`/Pokemon/${
                                                    pokemon.id + 1
                                                }`}
                                            >
                                                Pokémon suivant (n°
                                                {pokemon.id + 1})
                                            </Link>
                                        </li>
                                    );
                                }
                            })()}
                        </ul>
                    </nav>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Column>
                    <ul>
                        <li>Pokémon n°404</li>
                        <li>
                            <strong>MissingNo</strong>
                        </li>
                        <li>Points de vie : 33</li>
                        <li>Type : Bird</li>
                        <li>Attaque : 136</li>
                        <li>Défense : 0</li>
                        <li>Attaque Spéciale : 1</li>
                        <li>Défense Spéciale : 1</li>
                        <li>Vitesse : 29</li>
                    </ul>
                    <p>
                        Le Pokédex a rencontré un bug lors de la lecture de ce
                        Pokémon. Veuillez réessayer avec un numéro existant.
                    </p>
                    <div className="button-link">
                        <Link to="/">Retourner à l&apos;accueil</Link>
                    </div>
                </Column>
                <div className="artwork">
                    <img
                        src="https://static.wikia.nocookie.net/tales-of-mythical-objects/images/d/d8/MissingNo..png"
                        alt="Illustration de MissingNo"
                    />
                </div>
            </>
        );
    }
};
export default PokemonDetails;
