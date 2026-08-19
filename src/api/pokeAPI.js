const BASE_URL = "https://pokeapi.co/api/v2";

const fetchPokemons = async () => {
      const response = await fetch(`${BASE_URL}/pokemon?limit=151`);
      if (!response.ok) {
            throw new Error("Fetching failed");
      }

      const data = await response.json();

      const pokemons = await Promise.all(
            data.results.map(async (pokemon) => {
                  const detailResponse = await fetch(pokemon.url);
                  const detail = await detailResponse.json();

                  return {
                        id: detail.id,
                        name: detail.name,
                        image:
                              detail.sprites.other["official-artwork"]
                                    ?.front_default ??
                              detail.sprites.front_default,
                        types: detail.types.map((type) => type.type.name),
                  };
            })
      );

      return pokemons;
};

export { fetchPokemons };
