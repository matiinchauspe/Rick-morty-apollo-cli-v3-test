import React from "react";
import { Outlet } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import { GET_FILTERED_CHARACTERS } from "../../api/queries";

import { Container, Title, Header, Main, Footer } from "./Layout.styled";
import { Search } from "../Search";

const Layout = (): React.ReactElement => {
  const [getCharacters, { data, loading, error }] = useLazyQuery(
    GET_FILTERED_CHARACTERS
  );

  return (
    <Container>
      <Header>
        <Title>Rick and morty</Title>
        <Search getCharacters={getCharacters} />
      </Header>
      <Main>
        <Outlet
          context={{
            filteredData: data,
            filteredLoading: loading,
            filteredError: error,
          }}
        />
      </Main>
      <Footer>Derechos reservados - Matias Inchauspe / @minchauspe</Footer>
    </Container>
  );
};

export default Layout;
