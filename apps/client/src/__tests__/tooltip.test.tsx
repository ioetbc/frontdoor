import React from "react";
import {render, fireEvent, waitFor} from "@testing-library/react";
import {MockedProvider} from "@apollo/react-testing";
import "@testing-library/jest-dom";
import {Tooltip} from "../components/tooltip";
import {
  CreateRecordDocument,
  FetchSummaryDocument,
} from "../graphql/generated/graphql";

const mocks = [
  {
    request: {
      query: FetchSummaryDocument,
      variables: {
        text: "selected text",
      },
    },
    result: {
      data: {
        fetchSummary: {
          summary: "summary of selected text",
          tags: ["tag1", "tag2"],
        },
      },
    },
  },
  {
    request: {
      query: CreateRecordDocument,
      variables: {
        summary: "summary of selected text",
        tags: ["tag1", "tag2"],
      },
    },
    result: {
      data: {
        createRecord: {
          id: "1",
          summary: "summary of selected text",
          tags: ["tag1", "tag2"],
        },
      },
    },
  },
];

test("renders Tooltip component without crashing", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Tooltip />
    </MockedProvider>
  );
});

test("displays tooltip and fetched data when text is selected", async () => {
  const {getByText} = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Tooltip />
    </MockedProvider>
  );

  // Simulate text selection
  document.getSelection = () =>
    ({
      toString: () => "selected text",
      getRangeAt: () => ({
        getBoundingClientRect: () => ({
          left: 100,
          top: 100,
          width: 100,
        }),
      }),
    } as any);

  fireEvent.mouseUp(document);

  await waitFor(() => getByText("summary of selected text"));

  expect(getByText("summary of selected text")).toBeInTheDocument();
  expect(getByText("tag1")).toBeInTheDocument();
  expect(getByText("tag2")).toBeInTheDocument();
  expect(getByText("save summary")).toBeInTheDocument();
});
