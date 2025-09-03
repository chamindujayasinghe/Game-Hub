import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "grid" }}
          area={"aside"}
          bg={"pink"}
        >
          Aside
        </GridItem>
        <GridItem area={"main"} bg={"yellow"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
