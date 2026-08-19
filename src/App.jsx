import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { fetchPokemons } from "./api/api";

function App() {
      const [pokemons, setPokemons] = useState([]);
      
      useEffect(() => {
            fetchPokemons()
                  .then(setPokemons)
                  .catch((error) => console.error(error));
      }, []);

      return (
            <>
                  <main>
                        <header>
                              <h1>Pokedex</h1>
                        </header>
                        <section className="grid">
                              {pokemons.map((pokemon) => (
                                    <PokemonCard
                                          key={pokemon.id}
                                          pokemon={pokemon}
                                    />
                              ))}
                        </section>
                  </main>
            </>
      );
}

export default App;
