import { useQuery } from "@tanstack/react-query";
import { getAllPokemons } from "../services/pokemonService";

export const useAllPokemons = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["all-pokemons"],
    queryFn: () => getAllPokemons(),
  });
  return { data, isPending, error };
};
