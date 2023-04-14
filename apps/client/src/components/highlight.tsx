import {useEffect, useState} from "react";
import {useLazyQuery, useMutation} from "@apollo/client";
import {
  CreateRecordDocument,
  FetchSummaryDocument,
} from "../graphql/generated/graphql";

export const Highlight = () => {
  const [createRecord] = useMutation(CreateRecordDocument);
  const [fetchSummary, {data, loading, error}] =
    useLazyQuery(FetchSummaryDocument);

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0});

  const handleSave = () => {
    if (!data?.fetchSummary?.summary) {
      return;
    }
    createRecord({
      variables: {
        text: data.fetchSummary.summary,
      },
    });
  };

  const getSelectionText = (): string => {
    return window.getSelection()!.toString();
  };

  const logSelectedText = async () => {
    const selectedText = getSelectionText();
    if (!selectedText) {
      setShowTooltip(false);
      return;
    }

    if (selectedText) {
      console.log("mandem text:", selectedText);

      const range = window.getSelection()?.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        setTooltipPosition({x: rect.left + rect.width / 2, y: rect.top});
        setShowTooltip(true);
      }

      await fetchSummary({
        variables: {
          text: selectedText,
        },
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", logSelectedText);

    return () => {
      document.removeEventListener("mouseup", logSelectedText);
    };
  }, []);

  console.log("datadatadatadatadatadatadata", data);
  console.log("errorerrorerrorerrorerrorerror", error);
  console.log("loadingloadingloadingloadingloading", loading);

  return (
    <>
      <div
        style={{
          display: showTooltip ? "block" : "none",
          position: "fixed",
          left: tooltipPosition.x,
          top: tooltipPosition.y,
          backgroundColor: "black",
          color: "white",
          padding: "5px 10px",
          borderRadius: "3px",
          transform: "translate(-50%, -100%)",
          whiteSpace: "nowrap",
        }}
      >
        {loading ? (
          "loading..."
        ) : (
          <div style={{display: "flex", flexDirection: "column"}}>
            {data?.fetchSummary.summary}
            <div style={{display: "flex", gap: 4}}>
              {data?.fetchSummary.tags.map((tag) => (
                <span style={{background: "red"}}>{tag}</span>
              ))}
            </div>
            <button onClick={handleSave}>save summary</button>
          </div>
        )}
      </div>
    </>
  );
};
