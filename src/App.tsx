import { Grid, GridItem, Show } from "@chakra-ui/react";


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* Show function will display specific elements depending on the user's screen size */}
      <Show above="lg">
      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      </Show> 
      <GridItem area="main" bg="dodgerblue">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
