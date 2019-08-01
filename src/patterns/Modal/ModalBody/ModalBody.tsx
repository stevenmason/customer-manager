import React from "react";

import Props from "./types";
import * as SC from "./ModalBody.styled";

const ModalBody: React.FC<Props> = ({ children }) => (
  <SC.ModalBody>{children}</SC.ModalBody>
);

export default ModalBody;
