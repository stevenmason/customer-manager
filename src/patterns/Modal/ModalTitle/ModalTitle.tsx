import React from "react";

import Props from "./types";
import * as SC from "./ModalTitle.styled";

const ModalTitle: React.FC<Props> = ({ children }) => (
  <SC.ModalTitle>
    <h3>{children}</h3>
  </SC.ModalTitle>
);

export default ModalTitle;
