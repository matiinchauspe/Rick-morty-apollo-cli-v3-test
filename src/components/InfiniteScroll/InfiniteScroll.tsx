import React from "react";
import useInfiniteScroll from "react-easy-infinite-scroll-hook";

import { Scroll as Types } from "./types";

import { Grid, Col } from "../../components/Grid";
import { Character as CharacterCard } from "../Character";
import { List } from "./InfiniteScroll.styled";

const InfiniteScroll = ({
  items,
  isLoading,
  canLoadMore,
  onLoadMore,
}: Types): React.ReactElement => {
  const infiniteScrollRef = useInfiniteScroll({
    next: onLoadMore,
    rowCount: items.length,
    hasMore: { down: canLoadMore },
    scrollThreshold: 0.5,
  });
  return (
    <List ref={infiniteScrollRef}>
      <Grid>
        {(items || []).map((character: any) => (
          <Col key={character.id}>
            <CharacterCard character={character} />
          </Col>
        ))}
      </Grid>
      {isLoading && <div>Loading...</div>}
    </List>
  );
};

export default InfiniteScroll;
