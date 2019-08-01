import React from "react";

import { SIZES } from "./constants";
import { Props } from "./types";
import * as SC from "./styles";

const Control: React.FC<Props> = ({ children, label, size = SIZES.LARGE }) => (
  <SC.Container size={size}>
    {label && <SC.Label>{label}</SC.Label>}
    {children}
  </SC.Container>
);

export default Control;
