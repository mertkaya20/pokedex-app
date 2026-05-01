import React from "react";
import { Link, useParams } from "react-router-dom";
import { usePokemonDetail } from "../hooks/usePokemonDetail";
import StatusMessage from "../components/StatusMessage";

const typeColors = {
  grass: "bg-green-100 text-green-700",
  poison: "bg-purple-100 text-purple-700",
  fire: "bg-red-100 text-red-700",
  water: "bg-blue-100 text-blue-700",
  bug: "bg-lime-100 text-lime-700",
  normal: "bg-slate-100 text-slate-700",
  electric: "bg-yellow-100 text-yellow-700",
  ground: "bg-orange-100 text-orange-700",
  fairy: "bg-pink-100 text-pink-700",
  fighting: "bg-red-200 text-red-800",
  psychic: "bg-pink-200 text-pink-800",
  rock: "bg-stone-100 text-stone-700",
  ghost: "bg-violet-100 text-violet-700",
  ice: "bg-cyan-100 text-cyan-700",
  dragon: "bg-indigo-100 text-indigo-700",
};

const statColors = {
  hp: "bg-red-400",
  attack: "bg-orange-400",
  defense: "bg-blue-400",
  "special-attack": "bg-purple-400",
  "special-defense": "bg-green-400",
  speed: "bg-yellow-400",
};

const PokemonDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = usePokemonDetail(id);

  if (isPending)
    return <StatusMessage type="loading" message="Yükleniyor..." />;
  if (error) return <StatusMessage type="error" message="Hata oluştu" />;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-slate-600 mb-6 transition-colors"
        >
          ← Geri dön
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-1 bg-slate-800"></div>

          <div className="flex flex-col sm:flex-row gap-8 p-8">
            {/* Sol: Resim + Tipler */}
            <div className="flex flex-col items-center gap-4 sm:w-48">
              <div className="bg-slate-50 rounded-2xl p-4 w-full flex justify-center">
                <img
                  src={data.sprites.front_default}
                  alt={data.name}
                  className="w-32 h-32"
                />
              </div>
              <p className="text-xs text-slate-300 font-light">#{data.id}</p>
              <h1 className="text-2xl font-serif text-slate-800 capitalize">
                {data.name}
              </h1>
              <div className="flex gap-2 flex-wrap justify-center">
                {data.types.map((t) => (
                  <span
                    key={t.type.name}
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${typeColors[t.type.name] || "bg-slate-100 text-slate-700"}`}
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-center mt-2">
                <div>
                  <p className="text-xs text-slate-400 font-light">Boy</p>
                  <p className="text-sm font-medium text-slate-700">
                    {data.height / 10}m
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-light">Kilo</p>
                  <p className="text-sm font-medium text-slate-700">
                    {data.weight / 10}kg
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ: Stats + Abilities */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Stats */}
              <div>
                <p className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-3">
                  İstatistikler
                </p>
                <div className="flex flex-col gap-2.5">
                  {data.stats.map((s) => (
                    <div key={s.stat.name} className="flex items-center gap-3">
                      <p className="text-xs text-slate-400 capitalize w-28 shrink-0">
                        {s.stat.name}
                      </p>
                      <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${statColors[s.stat.name] || "bg-slate-400"}`}
                          style={{
                            width: `${Math.min((s.base_stat / 255) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs font-medium text-slate-600 w-8 text-right">
                        {s.base_stat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abilities */}
              <div>
                <p className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-3">
                  Yetenekler
                </p>
                <div className="flex gap-2 flex-wrap">
                  {data.abilities.map((a) => (
                    <span
                      key={a.ability.name}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs capitalize"
                    >
                      {a.ability.name}
                      {a.is_hidden && (
                        <span className="ml-1 text-slate-400">(gizli)</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
