import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: props) => {
  return (
    <Box borderRadius={10} overflow="hidden" paddingY={3} paddingX={3}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
