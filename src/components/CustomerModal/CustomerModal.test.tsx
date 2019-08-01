import React from "react";
import renderer from "react-test-renderer";

import CustomerModal from "./CustomerModal";
import {
  setEditingCustomer,
  setCustomer,
  setEditingCustomerValue
} from "../../store/actions";

const PROPS = {
  customer: {
    id: "1",
    firstName: "Steven",
    lastName: "Mason",
    dateOfBirth: ""
  },
  setEditingCustomer,
  setCustomer,
  setEditingCustomerValue
};

it("renders correctly", () => {
  const tree = renderer.create(<CustomerModal {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
