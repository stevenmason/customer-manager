import React from "react";
import renderer from "react-test-renderer";

import Button from "./Button";

const PROPS = { onClick: () => {} };

it("renders correctly", () => {
  const tree = renderer.create(<Button {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
