import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../services/pokemonService";

export const usePokemon = (offset) => {
  const { data, error, isPending } = useQuery({
    queryKey: ["lists", offset],
    queryFn: () => getPokemonList(offset),
  });

  return { data, error, isPending };
};
