export const summariseTextPrompt = (text: string): string => {
  return `
      Create a valid JSON object that consists of a summary and suggest up to 3 tags so I can quickly identify the summary at a later date. Your response should follow this format:
      ### Start of example
      {
        "summary": "A summary of the text",
        "tags": ["tag 1", "tag 2", "tag 3"]
      }
      ### End of example
      ### Start of text
      ${text}
      ### End of text
      The JSON object:`.trim();
};
