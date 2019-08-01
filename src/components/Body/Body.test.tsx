import React from "react";
import renderer from "react-test-renderer";

import Body from "./Body";
import {
  setEditingCustomer,
  deleteCustomer,
  setFilter,
  addNewEditingCustomer
} from "../../store/actions";
import { DEFAULT_CUSTOMER } from "../../store/constants";

const PROPS = {
  filter: "",
  customers: [DEFAULT_CUSTOMER],
  loading: false,
  setEditingCustomer,
  setFilter,
  addNewEditingCustomer,
  deleteCustomer
};

it("renders correctly", () => {
  const tree = renderer.create(<Body {...PROPS} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
