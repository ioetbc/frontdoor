import {useLazyQuery, useQuery} from "@apollo/client";
import {
  FetchLibraryDocument,
  FetchTagsDocument,
  FetchRecordsByTagDocument,
} from "../graphql/generated/graphql";

import {ListItem, UnorderedList} from "@chakra-ui/react";
import {Select} from "../components/select";
import {createOptions} from "../utils/create-options";
import {useState} from "react";
import {OrderLibrary} from "../components/order-results";

type TRecord = {
  __typename?: "TRecord";
  summary: string;
  tags: string[];
};

export const Library = () => {
  const [library, setLibrary] = useState<TRecord[]>([]);
  const {data: options} = useQuery(FetchTagsDocument);
  const [fetchRecordsByTag] = useLazyQuery(FetchRecordsByTagDocument);
  const [fetchRecordsByOrder] = useLazyQuery(FetchLibraryDocument);
  const {loading, error} = useQuery(FetchLibraryDocument, {
    variables: {asc: false},
    onCompleted: (data) => {
      setLibrary(data.fetchLibrary);
    },
  });

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
    <>
      <Select
        options={createOptions(options.fetchTags)}
        onChangeHandler={handleTagChange}
      />
      <OrderLibrary onChangeHandler={handleOrderLibraryChange} />
      <UnorderedList role="list">
        {library.map((record) => (
          <ListItem>{record.summary}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};
