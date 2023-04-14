import {useEffect, useState} from "react";

export const Selection = () => {
  const [selection, setSelection] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0});
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const getSelectionText = (): string => {
    return window.getSelection()!.toString();
  };

  const logSelectedText = () => {
    const selectedText = getSelectionText();

    if (selectedText) {
      console.log("mandem text:", selectedText);
      setSelection(selectedText);

      const range = window.getSelection()?.getRangeAt(0);
      console.log("range", range);
      if (range) {
        const rect = range.getBoundingClientRect();
        console.log("rect", rect);
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
        {selection}
      </div>
    </>
  );
};
