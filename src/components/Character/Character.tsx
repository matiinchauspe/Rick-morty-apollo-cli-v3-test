import React, { ReactElement } from "react";

import { Card, Image, Name, Link, Species } from "./Character.styled";

const CharacterCard = ({ character }: any): ReactElement => {
  return (
    <Card>
      <Name>{character.name}</Name>
      <Image src={character.image} alt={character.name} />
      <Species>{character.species}</Species>
      <Link to={`character/${character.id}`}>Ver detalle</Link>
    </Card>
  );
};

export default CharacterCard;
