import type {CodegenConfig} from "@graphql-codegen/cli";
import {GRAPHQL_ENDPOINT} from "./src/constants";

const config: CodegenConfig = {
  overwrite: true,
  schema: GRAPHQL_ENDPOINT,
  documents: "./src/graphql/*.graphql",
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
