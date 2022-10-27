import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import { GET_FILTERED_CHARACTERS } from "../../api/queries";

import { Container, Title, Header, Main, Footer } from "./Layout.styled";
import { Search } from "../Search";

const Layout = (): React.ReactElement => {
  const [] = useState();
  const [getCharacters, result] = useLazyQuery(GET_FILTERED_CHARACTERS);

  console.log({ result });

  const handleGetCharacters = ({ variables, ...rest }: any) => {
    debugger; // eslint
    getCharacters({
      variables: { ...variables },
      ...rest,
    });
  };

  const outletContextValue = useMemo<any>(
    (): any => ({
      filteredData: result.data,
      filteredLoading: result.loading,
      filteredError: result.error,
      getFilteredCharacters: handleGetCharacters,
    }),
    [result.data, result.loading, result.error]
  );

  return (
    <Container>
      <Header>
        <Title>Rick and morty</Title>
        <Search getCharacters={handleGetCharacters} />
      </Header>
      <Main>
        <Outlet context={outletContextValue} />
      </Main>
      <Footer>Derechos reservados - Matias Inchauspe / @minchauspe</Footer>
    </Container>
  );
};

export default Layout;
