// import axios from "axios";

// export const healeSearch = async (event) => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/type/${event}`)
//     const typePokemon = await response.data.pokemon;
//     const pokes = typePokemon.map((res) => res.pokemon);
//     const entrarPokemon = await pokes.map((res) => res.url)
//     const pecorrerArray = await entrarPokemon.map((res) => axios.get(res))
//     const pokemonsType = await Promise.all(pecorrerArray);
//     const buscandoTypePokemon = pokemonsType.map((res) => console.log(res.data))
//     return buscandoTypePokemon;
// }



  