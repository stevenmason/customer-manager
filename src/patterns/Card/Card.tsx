import React from "react";

import Props from "./types";
import * as SC from "./styles";

const Card: React.FC<Props> = ({ children }) => <SC.Card>{children}</SC.Card>;

export default Card;
