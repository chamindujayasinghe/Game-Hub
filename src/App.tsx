import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem area={"nav"} bg={"blue.solid"}>
          Nav
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
