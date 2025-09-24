import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { platforms } from "./hooks/UseGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<platforms | null>(
    null
  );
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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
        <GridItem area={"main"} paddingX={4}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={(p) => setSelectedPlatform(p)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
