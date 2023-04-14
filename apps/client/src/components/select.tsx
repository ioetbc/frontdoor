import {Select as ChakraSelect} from "chakra-react-select";
import {Option} from "../types";
import {useState} from "react";

interface SelectProps {
  options: Option[];
  onChangeHandler: (tag: string) => void;
}

export const Select = ({options, onChangeHandler}: SelectProps) => {
  return (
    <ChakraSelect
      tagVariant="solid"
      options={options}
      onChange={(option) => {
        console.log("selectedOption", option);
        if (!option) return;
        onChangeHandler(option.value);
      }}
    />
  );
};
