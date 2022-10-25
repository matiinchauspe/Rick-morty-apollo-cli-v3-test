import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../api/queries";

import { Character as CharacterCard } from "../../components/Character";
import { Grid, Row, Col } from "../../components/Grid";

const Characters = () => {
  // const [characters, setCharacters] = useState(null);
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  // useEffect(() => {
  //   if (data) {
  //     setCharacters(data.characters.results);
  //   }
  // }, [loading]);
  if (error) return <div>An error has occurred</div>;
  if (loading) return <div>Loading...</div>;

  const characters = data?.characters.results;

  return (
    <Grid>
      {(characters || []).map((character: any) => (
        <Col key={character.id}>
          <CharacterCard character={character} />
        </Col>
      ))}
    </Grid>
  );
};

export default Characters;
