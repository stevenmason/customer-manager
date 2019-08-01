import React from "react";
import renderer from "react-test-renderer";

import List from "./List";
import Item from "./Item";

const PROPS = {};

it("renders correctly", () => {
  const tree = renderer
    .create(
      <List {...PROPS}>
        <Item>Test</Item>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
