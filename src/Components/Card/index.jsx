import { Card, Box } from "./style";

export const Component_Card = (props) => {
  return (
      <Card>
        <p>#{props.id}</p>
        <img
          src={props.img}
          alt="Imagem Pokémon"
        />
        <h1>
          {props.nome}
          <img
            className="GIF_pokemon"
            src={props.gif}
            alt="GIF pokémon"
          />
        </h1>
      </Card>
  );
};
