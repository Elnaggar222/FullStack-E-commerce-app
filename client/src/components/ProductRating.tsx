import { Box, HStack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface ICustomRating {
  rating: number;
  maxRating?: number;
  size?: string;
}
const CustomRating = ({
  rating,
  maxRating = 5,
  size = "20px",
}: ICustomRating) => {
  // Create an array of stars fill numbers
  const stars: number[] = [];
  for (let i = 1; i <= maxRating; i++) {
    let fill = 0;
    // If the rating covers the whole star
    if (rating >= i) {
      fill = 100;
    }
    // If the rating is in-between for this star
    else if (rating > i - 1) {
      fill = (rating - (i - 1)) * 100;
    }
    stars.push(fill);
  }
  return (
    <HStack gap={0}>
      {stars.map((fill, idx) => (
        <Box
          key={idx}
          position="relative"
          boxSize={size}
        >
          {/* boxSize={size} => width={size} height={size}  */}
          <Icon as={FaStar} color="gray.300" boxSize={size} />
          <Box
            position="absolute"
            top="0"
            left="0"
            width={`${fill}%`}
            overflow="hidden"
          >
            <Icon as={FaStar} color="orange.500" boxSize={size} />
          </Box>
        </Box>
      ))}
    </HStack>
  );
};

export default CustomRating;
