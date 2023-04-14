import {FormControl, FormLabel, Switch} from "@chakra-ui/react";
interface OrderByProps {
  onChangeHandler: (value: any) => void;
}

export const OrderLibrary = ({onChangeHandler}: OrderByProps) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.checked", e);
    onChangeHandler(e.target.checked);
  };
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="asc" mb="0">
        Order results in asc order
      </FormLabel>
      <Switch onChange={handleToggle} id="asc" />
    </FormControl>
  );
};
