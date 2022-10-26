import React from "react";
import { useQuery } from "@apollo/client";
import { useOutletContext } from "react-router-dom";

import { GET_CHARACTERS } from "../../api/queries";

import { Character as CharacterCard } from "../../components/Character";
import { Grid, Col } from "../../components/Grid";

const Characters = (): React.ReactElement => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  const { filteredData, filteredLoading, filteredError } =
    useOutletContext<any>();

  if (error || filteredError) return <div>An error has occurred</div>;
  if (loading || filteredLoading) return <div>Loading...</div>;

  let characters = data?.characters.results;

  if (filteredData) {
    characters = filteredData?.characters.results;
  }

  console.log({ filteredData });

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
