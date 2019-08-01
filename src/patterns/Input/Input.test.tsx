import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input";
import { Props } from "./types";

const PROPS: Props = {
  label: "Input",
  onChange: () => {}
};

it("renders correctly", () => {
  const tree = renderer.create(<Input {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
