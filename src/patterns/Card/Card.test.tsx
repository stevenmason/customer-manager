import React from "react";
import renderer from "react-test-renderer";

import Card from "./Card";

const PROPS = { children: "hello!" };

it("renders correctly", () => {
  const tree = renderer.create(<Card {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
