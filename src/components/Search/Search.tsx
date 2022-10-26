import React, { useRef, useCallback } from "react";

import { Search as SearchTypes } from "./types";
import { Container, Input, Button } from "./Search.styled";

const Search = ({ getCharacters }: SearchTypes): React.ReactElement => {
  const inputRef = useRef<any>(null);

  const handleSearch = useCallback((): void => {
    getCharacters({ variables: { name: inputRef.current.value } });
  }, []);

  return (
    <Container>
      <Input name="search" placeholder="Búsqueda" ref={inputRef} />
      <Button onClick={handleSearch}>Buscar</Button>
    </Container>
  );
};

export default Search;
