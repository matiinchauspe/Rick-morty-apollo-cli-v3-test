import React, { useState, useMemo, useRef, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../api/queries";

import { Container, Title, Header, Main, Footer } from "./Layout.styled";
import { Search } from "../Search";

const INITIAL_PAGE = 0;

const Layout = (): React.ReactElement => {
  const [skip, setSkip] = useState(false);
  const [listedCharacters, setListedCharacters] = useState<Array<any>>([]);

  const pageRef = useRef<any>({ page: INITIAL_PAGE, info: null });
  const searchCurrentRef = useRef<any>(null);
  const searchPreviousRef = useRef<any>({ value: "" });

  // QUERIES
  // first query
  const { loading: firstLoading, error: firstError } = useQuery(
    GET_CHARACTERS,
    {
      variables: {
        page: pageRef.current.page,
        name: "",
      },
      onCompleted: ({ characters }: any) => {
        const { results, info } = characters;
        // set the states with the information that we need
        setListedCharacters(results);
        pageRef.current.info = info;
        pageRef.current.page = info.next;
        // cancel to call the query continuously
        setSkip(true);
      },
      skip,
    }
  );
  // lazy
  const [getCharacters, { loading: lazyLoading, error: lazyError }] =
    useLazyQuery(GET_CHARACTERS);

  const loading = firstLoading || lazyLoading;
  const error = firstError || lazyError;

  const isANewSearch = () =>
    searchCurrentRef.current.value !== searchPreviousRef.current.value;

  const handleGetCharacters = useCallback((params: any = null) => {
    getCharacters({
      variables: {
        name: searchCurrentRef.current.value,
        page: isANewSearch() ? INITIAL_PAGE : pageRef.current.page,
      },
      onCompleted: ({ characters }) => {
        const { results: newCharacters, info } = characters;
        if (isANewSearch()) {
          setListedCharacters([...[], ...newCharacters]);
          searchPreviousRef.current.value = searchCurrentRef.current.value;
        } else {
          setListedCharacters(
            (prevCharacters: Array<any>): Array<any> => [
              ...prevCharacters,
              ...newCharacters,
            ]
          );
        }
        pageRef.current.info = info;
        pageRef.current.page = info.next;
      },
    });
  }, []);

  const outletContextValue = useMemo<any>(
    (): any => ({
      characters: listedCharacters,
      loading,
      error,
      hasMore: Boolean(pageRef.current.info?.next),
      getCharacters: handleGetCharacters,
    }),
    [listedCharacters, loading, error]
  );

  return (
    <Container>
      <Header>
        <Title>Rick and morty</Title>
        <Search searchRef={searchCurrentRef} onSearch={handleGetCharacters} />
      </Header>
      <Main>
        <Outlet context={outletContextValue} />
      </Main>
      <Footer>Derechos reservados - Matias Inchauspe / @minchauspe</Footer>
    </Container>
  );
};

export default Layout;
