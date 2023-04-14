import {useQuery} from "@apollo/client";
import {FetchLibraryDocument} from "../graphql/generated/graphql";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export const Library = () => {
  const {data, loading, error} = useQuery(FetchLibraryDocument);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error - sad face</div>;

  return (
    <UnorderedList>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </UnorderedList>
  );
};
