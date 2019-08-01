import React from "react";

import Props from "./types";
import * as SC from "./styles";

const openLink = (href: string) => window.open(href, "_blank");

const Button: React.FC<Props> = ({ children, href, onClick }) => (
  <SC.Button onClick={href ? () => openLink(href) : onClick}>
    {children}
  </SC.Button>
);

export default Button;
