import { CardBody, CardRoot, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <CardRoot width={"300px"} borderRadius={10} overflow="hidden" margin={3}>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};
export default GameCardSkeleton;
