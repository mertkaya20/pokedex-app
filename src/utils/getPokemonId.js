export const getPokemonId = (url) => url.split("/").filter(Boolean).pop();
