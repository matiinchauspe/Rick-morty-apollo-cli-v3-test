import React, { memo, useCallback } from "react";

import { Search as SearchTypes } from "./types";
import { Container, Input, Button } from "./Search.styled";

const Search = ({ searchRef, onSearch }: SearchTypes): React.ReactElement => {
  const handleSearch = useCallback((): void => {
    const value = searchRef.current.value;
    onSearch({ variables: { name: value } });
  }, []);

  return (
    <Container>
      <Input name="search" placeholder="Búsqueda" ref={searchRef} />
      <Button onClick={handleSearch}>Buscar</Button>
    </Container>
  );
};

export default memo(Search);
