import axios from "axios";

export const getPokemonList = async (offset) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
  );
  return response.data;
};

export const getPokemonDetail = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

export const getAllPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10000",
  );
  return response.data;
};
