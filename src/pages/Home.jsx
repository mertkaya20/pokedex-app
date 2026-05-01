import React, { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import { getPokemonId } from "../utils/getPokemonId";
import Pagination from "../components/Pagination";
import PokemonCard from "../components/PokemonCard";
import StatusMessage from "../components/StatusMessage";
import { useAllPokemons } from "../hooks/useAllPokemons";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const offset = (page - 1) * 20;

  const {
    data: pokemonData,
    error: pokemonError,
    isPending: isPokemonPending,
  } = usePokemon(offset);
  const totalPages = Math.ceil(pokemonData?.count / 20);

  const {
    data: allPokemonsData,
    error: allPokemonsError,
    isPending: isAllPokemonsPending,
  } = useAllPokemons();

  const isSearching = search.trim().length > 0;

  const displayedPokemons = isSearching
    ? allPokemonsData?.results.filter((p) =>
        p.name.includes(search.toLowerCase()),
      )
    : pokemonData?.results;

  if (isPokemonPending || isAllPokemonsPending)
    return <StatusMessage type="loading" message="Yükleniyor..." />;
  if (pokemonError || allPokemonsError)
    return <StatusMessage type="error" message="Hata oluştu" />;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-serif text-slate-800 mb-1">Pokédex</h1>
        <p className="text-sm text-slate-400 font-light mb-8">
          Tüm pokemonları keşfet
        </p>
        <SearchBar setPage={setPage} search={search} setSearch={setSearch} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedPokemons.map((pokemon) => {
            const id = getPokemonId(pokemon.url);
            return <PokemonCard key={id} id={id} name={pokemon.name} />;
          })}
        </div>

        {!isSearching && (
          <Pagination setPage={setPage} page={page} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default Home;
