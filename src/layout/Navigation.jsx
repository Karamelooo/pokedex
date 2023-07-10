import { Link } from 'react-router-dom';
import Pokedex from '../data/pokedex.json';
import ColorTheme from '../components/ColorTheme';

const Navigation = ({ children }) => {
    return (
        <>
            <header id="main-header">
                <nav>
                    <h3>Menu</h3>
                    <div className="button-link">
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/Pokedex">Pokédex</Link>
                            </li>
                            {Pokedex.map((pokemon) => (
                                <li key={pokemon.id}>
                                    <Link
                                        to={`/Pokemon/${pokemon.id}`}
                                        className={`${pokemon.type[0]}-Card`}
                                    >
                                        N°{pokemon.id} {pokemon.name.french}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container">{children}</div>
            <footer id="main-footer">
                <h4>Hugo PETIT</h4>
                <h4>IPSSI</h4>
                <div className="button-link">
                    <ColorTheme />
                </div>
            </footer>
        </>
    );
};

export default Navigation;
