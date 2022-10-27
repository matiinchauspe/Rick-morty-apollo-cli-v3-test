import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useOutletContext } from "react-router-dom";

import { GET_CHARACTERS } from "../../api/queries";
import { InfiniteScroll } from "../../components/InfiniteScroll";

const Characters = (): React.ReactElement => {
  const [page, setPage] = useState(() => 1);
  const [skip, setSkip] = useState(false);
  const [listedCharacters, setListedCharacters] = useState<any>([]);
  const [info, setInfo] = useState<any>(null);

  const { loading: firstLoading, error } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      name: "",
    },
    onCompleted: ({ characters }: any) => {
      const { results, info } = characters;
      // set the states with the information that we need
      setListedCharacters(results);
      setInfo(info);
      setPage(page + 1);
      // cancel to call the query continuously
      setSkip(true);
    },
    skip,
  });

  const {
    // TODO: These params will not are necessary in near future since it will supply with getFilterCharacters response
    filteredData,
    filteredLoading,
    filteredError,
    // TODO: END TODO
    getFilteredCharacters,
  } = useOutletContext<any>();

  // NOTE: this is async to avoid InfiniteScroll props types problems
  const handleMoreData = async () => {
    getFilteredCharacters({
      variables: { page },
      onCompleted: ({ characters }: any) => {
        const { results: newCharacters, info } = characters;
        // setting characters list and info for the pagination functionality
        setListedCharacters((prevCharacters: Array<any>) => [
          ...prevCharacters,
          ...newCharacters,
        ]);
        setInfo({ ...info, ...info });
        setPage(page + 1);
      },
    });

    return;
  };

  const hasMore = Boolean(info?.next);

  console.log({ filteredData, hasMore });

  if (filteredError) return <div>An error has occurred</div>;

  return (
    <InfiniteScroll
      items={listedCharacters}
      isLoading={filteredLoading}
      canLoadMore={hasMore}
      next={handleMoreData}
    />
  );
};

export default Characters;
