import React from "react";

import Props from "./types";
import * as SC from "./styles";

const Header: React.FC<Props> = () => (
  <SC.Header>
    <h3>Customer Manager</h3>
  </SC.Header>
);

export default Header;
