import { Card, Skeleton, SkeletonText, AspectRatio } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <AspectRatio ratio={16 / 9}>
        <Skeleton />
      </AspectRatio>
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
