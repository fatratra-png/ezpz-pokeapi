function PokemonCard({ pokemon }) {
      return (
            <>
                  <div className="pokemon-card">
                        <span>#{String(pokemon.id).padStart(3, "0")}</span>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h2>{pokemon.name}</h2>
                        <div>
                              {pokemon.types.map((type) => (
                                    <span key={type}>{type}</span>
                              ))}
                        </div>
                  </div>
            </>
      );
}

export default PokemonCard;
