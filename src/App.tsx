import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav' bg='pink.300'>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='green.300'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='blue.300'>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
