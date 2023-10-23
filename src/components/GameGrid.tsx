import { SimpleGrid, Text } from "@chakra-ui/react"
import { useGames } from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";

export const GameGrid = () => {
    const {games, isLoading, error} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]


  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
      {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
