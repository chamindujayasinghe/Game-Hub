import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface props {
  onSearchInput: (searchInput: string) => void;
}

const SearchInput = ({ onSearchInput }: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) return onSearchInput(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          placeholder="search game..."
          borderRadius="20px"
          variant="outline"
          fontSize={{ base: "16px", md: "16px" }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
