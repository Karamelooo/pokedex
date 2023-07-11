import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonList from '../pages/PokemonList';
import PokemonDetails from '../pages/PokemonDetails';
import Navigation from '../layout/Navigation';
import NoMatch from '../components/NoMatch';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Pokedex" element={<PokemonList />} />
                    <Route path="/Pokemon/:id" element={<PokemonDetails />} />
                    <Route path="/*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
