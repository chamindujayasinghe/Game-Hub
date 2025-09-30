import { Image, type ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";

interface props {
  rating: number;
}

const Emoji = ({ rating }: props) => {
  if (rating < 3) return null;

  const EmojiMap: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsup, alt: "recomended" },
    5: { src: bullseye, alt: "exceptional" },
  };
  return <Image mt={2} {...EmojiMap[rating]} boxSize={"25px"} />;
};

export default Emoji;
