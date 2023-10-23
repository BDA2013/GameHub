import { SimpleGrid, Text } from "@chakra-ui/react"
import { useGames } from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";

export const GameGrid = () => {
    const {games, loading, error} = useGames()


  return (
    <>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
