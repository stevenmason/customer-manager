import React from "react";
import renderer from "react-test-renderer";

import Toolbar from "./Toolbar";
import { setFilter, addNewEditingCustomer } from "../../../store/actions";

const PROPS = {
  filter: "",
  addNewEditingCustomer,
  setFilter
};

it("renders correctly", () => {
  const tree = renderer.create(<Toolbar {...PROPS} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
