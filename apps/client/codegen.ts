import type {CodegenConfig} from "@graphql-codegen/cli";
import {GRAPHQL_HTTP_ENDPOINT} from "./src/constants";

const config: CodegenConfig = {
  overwrite: true,
  schema: GRAPHQL_HTTP_ENDPOINT,
  documents: "./src/graphql/*.graphql",
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
