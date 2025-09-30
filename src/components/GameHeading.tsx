import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={{ base: 20, lg: 35 }} pb={4} pl={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
