import React from "react";
import {Stack, StackDivider} from "@chakra-ui/react";

import {Body, Title} from "./text";

interface HeadingBlockProps {
  title: string;
  pre?: string;
}

export const HeadingBlock: React.FC<HeadingBlockProps> = ({title, pre}) => {
  return (
    <Stack divider={<StackDivider />} spacing="4" marginY={8}>
      <Title text={title} />
      {pre && <Body text={pre} />}
    </Stack>
  );
};
