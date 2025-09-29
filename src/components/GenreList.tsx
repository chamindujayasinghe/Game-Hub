import type { GameQuery } from "@/App";
import UseGenres, { type Genre } from "@/hooks/UseGenres";
import ImageUrl from "@/services/ImageUrl";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface props {
  onSelectGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

const GenreList = ({ gameQuery, onSelectGenre }: props) => {
  const { data, isLoading, errors } = UseGenres();
  if (errors) return null;

  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyleType={"none"}>
      {data.map((i) => (
        <List.Item key={i.id}>
          <HStack mb={3}>
            <Image
              borderRadius={"10px"}
              boxSize={10}
              src={ImageUrl(i.image_background)}
            />
            <Button
              color={i.id === gameQuery.genres?.id ? "red" : ""}
              onClick={() => onSelectGenre(i)}
              variant="plain"
              fontSize={"lg"}
            >
              {i.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
