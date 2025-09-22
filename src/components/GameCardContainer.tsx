import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: props) => {
  return (
    <Box
      width={"300px"}
      borderRadius={10}
      overflow="hidden"
      marginRight={3}
      marginBottom={3}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
