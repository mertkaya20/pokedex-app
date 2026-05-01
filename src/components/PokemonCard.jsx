import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ id, name }) => {
  return (
    <Link key={id} to={`/detail/${id}`}>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="w-20 h-20"
        />
        <p className="text-xs font-medium text-slate-500 capitalize">{name}</p>
        <p className="text-xs text-slate-300">#{id}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
