import React from "react";
import renderer from "react-test-renderer";

import Item from "./Item";

const PROPS = { children: <h1>hi</h1> };

it("renders correctly", () => {
  const tree = renderer.create(<Item {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
