import {useEffect, useState} from "react";
import {useRefetch} from "../context/refetch-context";
import {useLazyQuery, useMutation} from "@apollo/client";
import {
  CreateRecordDocument,
  FetchSummaryDocument,
} from "../graphql/generated/graphql";
import {Box, Tag, Badge, Flex, Button, Text, Spinner} from "@chakra-ui/react";

export const Tooltip = () => {
  const {setShouldRefetch} = useRefetch();
  const [createRecord] = useMutation(CreateRecordDocument);
  const [fetchSummary, {data, loading}] = useLazyQuery(FetchSummaryDocument);

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0});

  const handleSave = async () => {
    if (!data?.fetchSummary?.summary) {
      return;
    }
    try {
      await createRecord({
        variables: {
          summary: data.fetchSummary.summary,
          tags: data.fetchSummary.tags,
        },
      });
      setShouldRefetch(true);
    } catch (error) {
      console.log("Error creating record", error);
    }
  };

  const getSelectionText = (): string => {
    return window.getSelection()!.toString();
  };

  const logSelectedText = async () => {
    const selectedText = getSelectionText();
    if (!selectedText) {
      setShowTooltip(false);
      return;
    }

    if (selectedText) {
      const range = window.getSelection()?.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        setTooltipPosition({x: rect.left + rect.width / 2, y: rect.top - 10});
        setShowTooltip(true);
      }

      await fetchSummary({
        variables: {
          text: selectedText,
        },
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", logSelectedText);

    return () => {
      document.removeEventListener("mouseup", logSelectedText);
    };
  }, []);

  if (!showTooltip) {
    return null;
  }

  return (
    <Box
      borderRadius={4}
      transform="translate(-50%, -100%)"
      position="fixed"
      top={tooltipPosition.y}
      left={tooltipPosition.x}
      maxWidth="40%"
    >
      <Tag padding={4} boxShadow="lg">
        <Flex flexDirection={"column"}>
          {loading ? (
            <Spinner colorScheme="purple" />
          ) : (
            <Flex gap={4} flexDirection="column">
              <Text>{data?.fetchSummary.summary}</Text>
              <Flex gap={4} flexWrap="wrap">
                {data?.fetchSummary.tags.map((tag) => (
                  <Badge colorScheme="purple" key={`tooltip-${tag}`}>
                    {tag}
                  </Badge>
                ))}
              </Flex>
              <Button
                width={54}
                size="xs"
                colorScheme="purple"
                onClick={handleSave}
              >
                SAVE
              </Button>
            </Flex>
          )}
        </Flex>
      </Tag>
    </Box>
  );
};
