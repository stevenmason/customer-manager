import React from "react";

import Props from "./types";
import * as SC from "./ModalActions.styled";

const ModalActions: React.FC<Props> = ({ children }) => (
  <SC.ModalActions>{children}</SC.ModalActions>
);

export default ModalActions;
