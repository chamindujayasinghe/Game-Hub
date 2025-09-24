import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { platforms } from "./hooks/UseGames";

export interface GameQuery {
  platforms: platforms | null;
  genres: Genre | null;
}

function App() {
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
          <NavBar />
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "grid" }}
          area={"aside"}
          paddingX={4}
        >
          <GenreList
            selectedGenre={gameQuery.genres}
            onSelectGenre={(genres) => setGameQuery({ ...gameQuery, genres })}
          />
        </GridItem>
        <GridItem area={"main"} paddingX={4}>
          <PlatformSelector
            gameQuery={gameQuery}
            onSelectedPlatform={(platforms) =>
              setGameQuery({ ...gameQuery, platforms })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
