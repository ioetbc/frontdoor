import "@testing-library/jest-dom";
import {render, fireEvent} from "@testing-library/react";
import {OrderLibrary} from "../components/order-results";

test("renders OrderLibrary component", () => {
  const onChangeHandler = jest.fn();
  const {getByText} = render(
    <OrderLibrary onChangeHandler={onChangeHandler} />
  );
  expect(getByText(/Order results in asc order/i)).toBeInTheDocument();
});

test("calls onChangeHandler when switch is toggled", () => {
  const onChangeHandler = jest.fn();
  const {getByLabelText} = render(
    <OrderLibrary onChangeHandler={onChangeHandler} />
  );

  fireEvent.click(getByLabelText(/Order results in asc order/i));
  expect(onChangeHandler).toHaveBeenCalledTimes(1);
});
