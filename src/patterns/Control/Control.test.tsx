import React from "react";
import renderer from "react-test-renderer";

import Control from "./Control";
import { Props } from "./types";
import { SIZES } from "./constants";

const PROPS: Props = {
  label: "Label",
  size: SIZES.LARGE,
  children: "hi there"
};

it("renders correctly", () => {
  const tree = renderer.create(<Control {...PROPS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
