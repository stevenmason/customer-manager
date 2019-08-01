import React from "react";

import Props from "./types";
import * as SC from "./styles";

const Modal: React.FC<Props> = ({ children, onClose }) => (
  <SC.Container>
    <SC.Backdrop onClick={onClose} />
    <SC.Modal>{children}</SC.Modal>
  </SC.Container>
);

export default Modal;
