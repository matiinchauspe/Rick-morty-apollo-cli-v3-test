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
  next,
}: Types): React.ReactElement => {
  const infiniteScrollRef = useInfiniteScroll({
    // Function to fetch more items
    next,
    // The number of items loaded if you use the "Y-scroll" axis ("up" and "down")
    // if you are using the "X-scroll" axis ("left" and "right") use "columnCount" instead
    // you can also use "rowCount" and "columnCount" if you use "Y-scroll" and "X-scroll" at the same time
    rowCount: items.length,
    // Whether there are more items to load
    // if marked "true" in the specified direction, it will try to load more items if the threshold is reached
    // support for all directions "up", "down", "left", "right", both individually and in all directions at the same time
    hasMore: { down: canLoadMore },
  });
  return (
    <List ref={infiniteScrollRef}>
      <Grid>
        {(items || []).map((character: any) => (
          <Col key={character.id}>
            <CharacterCard character={character} />
          </Col>
        ))}
        {isLoading && <div>Loading...</div>}
      </Grid>
    </List>
  );
};

export default InfiniteScroll;
