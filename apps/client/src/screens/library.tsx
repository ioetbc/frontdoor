import {useLazyQuery, useQuery} from "@apollo/client";
import {
  FetchLibraryDocument,
  FetchTagsDocument,
  FetchRecordsByTagDocument,
} from "../graphql/generated/graphql";

import {Box} from "@chakra-ui/react";
import {useRefetch} from "../context/refetch-context";

import {Select} from "../components/select";
import {Card} from "../components/card";
import {createOptions} from "../utils/create-options";
import {useEffect, useState} from "react";
import {OrderLibrary} from "../components/order-results";
import {HeadingBlock} from "../components/heading-block";

type TRecord = {
  __typename?: "TRecord";
  summary: string;
  tags: string[];
};

export const Library = () => {
  const {shouldRefetch, setShouldRefetch} = useRefetch();
  const [library, setLibrary] = useState<TRecord[]>([]);

  const {loading, error, refetch} = useQuery(FetchLibraryDocument, {
    variables: {asc: false},
    onCompleted: (data) => {
      setLibrary(data.fetchLibrary);
    },
  });

  const {data: options} = useQuery(FetchTagsDocument);
  const [fetchRecordsByTag] = useLazyQuery(FetchRecordsByTagDocument);
  const [fetchRecordsByOrder] = useLazyQuery(FetchLibraryDocument);

  // TODO: Refactor this to use GraphQL subscriptions
  useEffect(() => {
    if (shouldRefetch) {
      fetchRecordsByOrder({
        variables: {asc: true},
        onCompleted: (data) => {
          setLibrary(data.fetchLibrary);
        },
      });
      setShouldRefetch(false);
    }
  }, [shouldRefetch, refetch, setShouldRefetch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error - sad face</div>;
  if (!options) return <div>Options not found</div>;

  const handleTagChange = (tag: string) => {
    fetchRecordsByTag({
      variables: {text: tag},
      onCompleted: (data) => {
        setLibrary(data.fetchRecordsByTag);
      },
    });
  };

  const handleOrderLibraryChange = (value: boolean) => {
    console.log("value", value);
    fetchRecordsByOrder({
      variables: {asc: value},
      onCompleted: (data) => {
        console.log("data fetchRecordsByOrder fetchRecordsByOrder", data);
        setLibrary(data.fetchLibrary);
      },
    });
  };

  console.log("data library", library);

  return (
    <Box padding={4} background="blackAlpha.800">
      <Select
        options={createOptions(options.fetchTags)}
        onChangeHandler={handleTagChange}
      />
      <OrderLibrary onChangeHandler={handleOrderLibraryChange} />

      <HeadingBlock title="Library" pre="View a summary of all your records" />

      {library.map((record, index) => (
        <Card
          key={record.summary}
          summary={record.summary}
          tags={record.tags}
          index={index}
        />
      ))}
    </Box>
  );
};
