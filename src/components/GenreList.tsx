import UseGenres, { type Genre } from "@/hooks/UseGenres";
import ImageUrl from "@/services/ImageUrl";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: props) => {
  const { data, isLoading } = UseGenres();

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
              onClick={() => onSelectGenre(i)}
              variant="ghost"
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
