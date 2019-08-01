import React from "react";
import renderer from "react-test-renderer";

import CustomerItem from "./CustomerItem";
import { DEFAULT_CUSTOMER } from "../../../store/constants";
import { setEditingCustomer, deleteCustomer } from "../../../store/actions";

const PROPS = {
  customer: DEFAULT_CUSTOMER,
  setEditingCustomer,
  deleteCustomer
};

it("renders correctly", () => {
  const tree = renderer.create(<CustomerItem {...PROPS} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
