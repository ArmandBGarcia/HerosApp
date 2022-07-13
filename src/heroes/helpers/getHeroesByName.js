import { heroes } from "../data/heroes";

//funcion para obtener los heroes por nombre
export const getHeroesByName = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];
  //se filtran los heroes por nombre aplicando el metodo includes de los objetos
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
