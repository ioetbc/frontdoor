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

export type CatInput = {
  age: Scalars['Int'];
  breed: Scalars['String'];
  name: Scalars['String'];
};

export type CatType = {
  __typename?: 'CatType';
  age: Scalars['Int'];
  breed: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat: CatType;
};


export type MutationCreateCatArgs = {
  input: CatInput;
};

export type Query = {
  __typename?: 'Query';
  cats: Array<CatType>;
  hello: Scalars['String'];
};

export type CatsQueryVariables = Exact<{ [key: string]: never; }>;


export type CatsQuery = { __typename?: 'Query', cats: Array<{ __typename?: 'CatType', name: string, age: number }> };


export const CatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}}]}}]} as unknown as DocumentNode<CatsQuery, CatsQueryVariables>;