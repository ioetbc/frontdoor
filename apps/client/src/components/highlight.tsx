import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {CreateRecordDocument} from "../graphql/generated/graphql";

export const Highlight = () => {
  const [createRecord] = useMutation(CreateRecordDocument);
  const [text, setText] = useState<string>("");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0});

  const handleSave = () => {
    console.log("save summary");
    console.log("text:", text);
    createRecord({
      variables: {
        summary: text,
        tags: ["something", "something else"],
      },
    });
  };

  const getSelectionText = (): string => {
    return window.getSelection()!.toString();
  };

  const logSelectedText = () => {
    const selectedText = getSelectionText();

    if (selectedText) {
      console.log("mandem text:", selectedText);
      setText(selectedText);

      const range = window.getSelection()?.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        setTooltipPosition({x: rect.left + rect.width / 2, y: rect.top});
        setShowTooltip(true);
      }
    } else {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", logSelectedText);

    return () => {
      document.removeEventListener("mouseup", logSelectedText);
    };
  }, []);

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
        <div style={{display: "flex", flexDirection: "column"}}>
          {text}
          <button onClick={handleSave}>save summary</button>
        </div>
      </div>
    </>
  );
};
