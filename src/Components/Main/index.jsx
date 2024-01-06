import { Main, Box_Buttons, Box_select } from "./style";
import { Component_Card } from "../Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Button_Load from "../Load_More";
import { Button_Change_Theme } from "../Button";
import { Components_Gifs } from "../Images_GIFS";


export const Component_Main = (props) => {
  const [dadosPokemons, setDadosPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [typePokemon, setTypePokemon] = useState("");

  const fetchData = async () => {
    let response;
    if (typePokemon !== "") {
      response = await axios.get(
        `https://pokeapi.co/api/v2/type/${typePokemon}`
      );
      setDadosPokemons(response.data.pokemon.map((entry) => entry.pokemon));
    } else {
      response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      );
      setDadosPokemons(response.data.results);
    }
  };

  const fetchPokemonData = async () => {
    const response = await axios.all(
      dadosPokemons.map((pokemon) => axios.get(pokemon.url))
    );
    const pokemonsData = response.map((res) => res.data);
    setPokemons(pokemonsData);
    setLoading(false);
  };

  const handleLoadMore = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset + 20}`
    );

    const result = await axios.all(
      response.data.results.map((pokemon) => axios.get(pokemon.url))
    );
    const resultPokemon = result.map((res) => res.data);
    setPokemons([...pokemons, ...resultPokemon]);
    setOffset(offset + 10);
  };

  useEffect(() => {
    fetchData();
  }, [typePokemon]);

  useEffect(() => {
    if (dadosPokemons.length > 0) {
      fetchPokemonData();
    }
  }, [dadosPokemons]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Components_Gifs/>
      <Box_Buttons>
        <Box_select>
          <select
            value={typePokemon}
            onChange={(event) => setTypePokemon(event.target.value)}
            className="glow-on-hover"
          >
            <option value="">TODOS OS TIPOS</option>
            <option value="fire">fogo</option>
            <option value="water">água</option>
            <option value="grass">grama</option>
            <option value="steel">ferro</option>
            <option value="electric">elétrico</option>
            <option value="dark">sombrio</option>
            <option value="poison">veneno</option>
            <option value="flying">voador</option>
            <option value="bug">inseto</option>
            <option value="ground">terra</option>
            <option value="rock">pedra</option>
            <option value="fighting">Fighting</option>
            <option value="normal">Normal</option>
            <option value="ghost">fantasma</option>
            <option value="psychic">psíquico</option>
            <option value="ice">gelo</option>
            <option value="dragon">dragão</option>
            <option value="fairy">fada</option>
          </select>
        </Box_select>
        <Button_Change_Theme
          themeBackground={props.function}
          text={props.text}
        />
      </Box_Buttons>

      <Main>
        <section>
          {pokemons.map((pokemon) => (
            <Component_Card
              key={pokemon.id}
              nome={pokemon.name}
              id={pokemon.id}
              img={pokemon.sprites.other.dream_world.front_default}
              gif={
                pokemon["sprites"]["versions"]["generation-v"]["black-white"][
                  "animated"
                ]["front_default"]
              }
            />
          ))}
        </section>
        <Button_Load funcao={handleLoadMore} />
      </Main>
    </>
  );
};
