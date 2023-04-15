import {Heading, Text} from "@chakra-ui/react";

interface BodyProps {
  text: string;
}

interface TitleProps {
  text: string;
}

export const Body: React.FC<BodyProps> = ({text}) => {
  return (
    <Text fontSize="sm" color="whiteAlpha.900">
      {text}
    </Text>
  );
};

export const Title: React.FC<TitleProps> = ({text}) => {
  return (
    <Heading size="md" color="whiteAlpha.900">
      {text}
    </Heading>
  );
};
