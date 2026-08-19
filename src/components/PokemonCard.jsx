import { typeColors } from "../constants/typeColors";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <div className="pokemon-card">
        <span>#{String(pokemon.id).padStart(3, "0")}</span>
        <img src={pokemon.image} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <div>
          {pokemon.types.map((type) => (
            <span
              key={type}
              style={{
                backgroundColor: typeColors[type],
                color: "#fff",
                padding: "2px 8px",
                borderRadius: "4px",
                margin: "0 4px",
              }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
