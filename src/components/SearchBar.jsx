import React from "react";

const SearchBar = ({ setSearch, setPage }) => {
  return (
    <div className="mb-6">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        type="text"
        placeholder="Pokemon ara..."
        className="w-full h-10 px-4 border border-slate-200 rounded-lg bg-white text-slate-800 text-sm placeholder:text-slate-300 outline-none focus:border-slate-400 transition-colors shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
