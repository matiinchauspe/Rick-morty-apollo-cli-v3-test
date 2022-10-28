import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { InfiniteScroll } from "../../components/InfiniteScroll";

const Characters = (): React.ReactElement => {
  const { characters, loading, error, getCharacters, hasMore } =
    useOutletContext<any>();

  // NOTE: this is async to avoid InfiniteScroll props types problems
  const handleMoreData = async () => getCharacters();

  if (error) return <div>An error has occurred</div>;

  return (
    <InfiniteScroll
      items={characters}
      isLoading={loading}
      canLoadMore={hasMore}
      onLoadMore={handleMoreData}
    />
  );
};

export default Characters;
