import React from "react";

import Props from "./types";
import StyledItem from "./Item.styled";

const Item: React.FC<Props> = ({ children }) => (
  <StyledItem>{children}</StyledItem>
);

export default Item;
