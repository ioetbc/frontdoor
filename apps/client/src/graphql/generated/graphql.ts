/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LibraryInput = {
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type LibraryType = {
  __typename?: 'LibraryType';
  id: Scalars['ID'];
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecord: LibraryType;
};


export type MutationCreateRecordArgs = {
  input: LibraryInput;
};

export type Query = {
  __typename?: 'Query';
  fetchLibrary: Array<LibraryType>;
};

export type CreateRecordMutationVariables = Exact<{
  summary: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateRecordMutation = { __typename?: 'Mutation', createRecord: { __typename?: 'LibraryType', summary: string, tags: Array<string> } };

export type FetchLibraryQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchLibraryQuery = { __typename?: 'Query', fetchLibrary: Array<{ __typename?: 'LibraryType', summary: string, tags: Array<string> }> };


export const CreateRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<CreateRecordMutation, CreateRecordMutationVariables>;
export const FetchLibraryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchLibrary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchLibrary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<FetchLibraryQuery, FetchLibraryQueryVariables>;