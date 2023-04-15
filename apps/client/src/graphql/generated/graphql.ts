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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecord: TCreateRecord;
};


export type MutationCreateRecordArgs = {
  input: RecordInput;
};

export type Query = {
  __typename?: 'Query';
  fetchLibrary: Array<TRecord>;
  fetchRecordsByTag: Array<TRecord>;
  fetchSummary: SummaryType;
  fetchTags: Array<TTag>;
};


export type QueryFetchLibraryArgs = {
  input: SortInput;
};


export type QueryFetchRecordsByTagArgs = {
  input: TextInput;
};


export type QueryFetchSummaryArgs = {
  input: TextInput;
};

export type RecordInput = {
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type SortInput = {
  asc?: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  recordAdded: TRecord;
};

export type SummaryType = {
  __typename?: 'SummaryType';
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type TCreateRecord = {
  __typename?: 'TCreateRecord';
  createdAt: Scalars['DateTime'];
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type TRecord = {
  __typename?: 'TRecord';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type TTag = {
  __typename?: 'TTag';
  tag: Scalars['String'];
};

export type TextInput = {
  text: Scalars['String'];
};

export type CreateRecordMutationVariables = Exact<{
  summary: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateRecordMutation = { __typename?: 'Mutation', createRecord: { __typename?: 'TCreateRecord', summary: string, tags: Array<string> } };

export type FetchLibraryQueryVariables = Exact<{
  asc: Scalars['Boolean'];
}>;


export type FetchLibraryQuery = { __typename?: 'Query', fetchLibrary: Array<{ __typename?: 'TRecord', summary: string, tags: Array<string> }> };

export type FetchSummaryQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type FetchSummaryQuery = { __typename?: 'Query', fetchSummary: { __typename?: 'SummaryType', summary: string, tags: Array<string> } };

export type FetchTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTagsQuery = { __typename?: 'Query', fetchTags: Array<{ __typename?: 'TTag', tag: string }> };

export type FetchRecordsByTagQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type FetchRecordsByTagQuery = { __typename?: 'Query', fetchRecordsByTag: Array<{ __typename?: 'TRecord', _id: string, createdAt: any, summary: string, tags: Array<string> }> };


export const CreateRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<CreateRecordMutation, CreateRecordMutationVariables>;
export const FetchLibraryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchLibrary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchLibrary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<FetchLibraryQuery, FetchLibraryQueryVariables>;
export const FetchSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<FetchSummaryQuery, FetchSummaryQueryVariables>;
export const FetchTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]} as unknown as DocumentNode<FetchTagsQuery, FetchTagsQueryVariables>;
export const FetchRecordsByTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchRecordsByTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchRecordsByTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<FetchRecordsByTagQuery, FetchRecordsByTagQueryVariables>;