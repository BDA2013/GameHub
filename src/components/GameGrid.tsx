import { Text } from "@chakra-ui/react"
import { useGames } from "../hooks/useGames.ts";

export const GameGrid = () => {
    const {games, loading, error} = useGames()


  return (
    <>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
