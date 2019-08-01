import React from "react";
import renderer from "react-test-renderer";

import Modal from "./Modal";

const PROPS = { onClose: () => {} };

it("renders correctly", () => {
  const tree = renderer.create(<Modal {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
