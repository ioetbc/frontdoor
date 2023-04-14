import {Option} from "../types";

export const createOptions = (arr: {tag: string}[]): Option[] => {
  return arr.map((option) => ({
    label: option.tag,
    value: option.tag,
  }));
};
