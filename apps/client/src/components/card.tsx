import {
  Card as ChakraCard,
  CardBody,
  Stack,
  StackDivider,
  Flex,
  Collapse,
  Badge,
  Link,
  Text,
} from "@chakra-ui/react";
import React, {useState} from "react";

interface CardProps {
  summary: string;
  tags: string[];
  index: number;
}

export const Card: React.FC<CardProps> = ({summary, tags, index}) => {
  const [expandedRecord, setExpandedRecord] = useState<number | null>(null);

  const handleViewMore = (index: number) => {
    if (expandedRecord === index) {
      setExpandedRecord(null);
    } else {
      setExpandedRecord(index);
    }
  };

  return (
    <ChakraCard marginBottom={4}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex flexDirection="column" gap={4}>
            <Collapse startingHeight={48} in={expandedRecord === index}>
              <Text pt="2" fontSize="sm">
                {summary}
              </Text>
            </Collapse>

            <Flex gap={4} flexWrap="wrap">
              {tags.map((tag) => (
                <Badge colorScheme="purple" key={`card-${tag}`}>
                  {tag}
                </Badge>
              ))}
            </Flex>
            <Link
              fontSize="sm"
              marginLeft="auto"
              onClick={() => handleViewMore(index)}
            >
              Read {expandedRecord === index ? "less" : "more"}
            </Link>
          </Flex>
        </Stack>
      </CardBody>
    </ChakraCard>
  );
};
