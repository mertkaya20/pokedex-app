import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import PokemonDetail from "./pages/PokemonDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<PokemonDetail />} />
    </Routes>
  );
};

export default App;
