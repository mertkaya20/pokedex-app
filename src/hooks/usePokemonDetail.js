import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../services/pokemonService";

export const usePokemonDetail = (id) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonDetail(id),
  });

  return { data, isPending, error };
};
