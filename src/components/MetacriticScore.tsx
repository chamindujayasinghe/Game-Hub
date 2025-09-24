import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

function MetacriticScore({ score }: props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge size={"md"} color={"black"} bg={color}>
      {score ? score : "NA"}
    </Badge>
  );
}

export default MetacriticScore;
