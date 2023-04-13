import {useQuery} from "@apollo/client";
import {CatsDocument} from "../graphql/generated/graphql";

export const Home = () => {
  const {data, loading, error} = useQuery(CatsDocument);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("data", data);
  return <div>home</div>;
};
