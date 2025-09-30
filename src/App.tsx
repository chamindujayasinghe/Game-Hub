import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import type { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { platforms } from "./hooks/UseGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  platforms: platforms | null;
  genres: Genre | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  useEffect(() => {
    document.title = "Game-Hub";
  }, []);
  const [gameQuery, setGameQuery] = useState({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base: "1fr",
          lg: "260px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearchInput={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "grid" }}
          area={"aside"}
          paddingX={4}
        >
          <GenreList
            gameQuery={gameQuery}
            onSelectGenre={(genres) => setGameQuery({ ...gameQuery, genres })}
          />
        </GridItem>
        <GridItem area={"main"} paddingX={1}>
          <GameHeading gameQuery={gameQuery} />
          <HStack pl={3}>
            <PlatformSelector
              gameQuery={gameQuery}
              onSelectedPlatform={(platforms) =>
                setGameQuery({ ...gameQuery, platforms })
              }
            />
            <SortSelector
              sortOrderValue={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
