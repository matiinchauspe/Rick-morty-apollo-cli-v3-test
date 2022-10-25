import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_CHARACTER } from "../../api/queries";

import {
  Container,
  Card,
  Image,
  Title,
  Link,
  Text,
  Centered,
  Summary,
} from "./Character.styled";
import { Row } from "../../components/Grid";

const CharacterDetail = () => {
  const { id: characterId } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      charId: characterId,
    },
  });

  console.log({ userDetail: data });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error has ocurred</div>;

  const character = data?.character;

  return (
    <Container>
      <Row>
        <Link to="/">Volver atrás</Link>
      </Row>
      <Card>
        <Centered>
          <Title>{character.name}</Title>
          <Image src={character.image} alt={character.name} />
        </Centered>
        <Summary>
          <Text color="#fb7185" cursive>
            {character.species}
          </Text>
          <Text>{character.gender}</Text>
          <Text color={character.status === "Alive" ? "#059669" : "#fb7185"}>
            {character.status}
          </Text>
          <Row>
            <Text>De:</Text>{" "}
            <Text color="#fb7185">{character.origin.name}</Text>
          </Row>
          <Row>
            <Text>Actualmente:</Text>{" "}
            <Text color="#fb7185">{character.location.name}</Text>
          </Row>
        </Summary>
      </Card>
    </Container>
  );
};

export default CharacterDetail;
