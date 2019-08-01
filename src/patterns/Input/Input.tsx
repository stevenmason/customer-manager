import React from "react";

import Control from "../Control";
import { Props } from "./types";
import * as SC from "./styles";

const Input: React.FC<Props> = ({
  label,
  controlSize,
  onChange,
  ...inputProps
}) => (
  <Control label={label} size={controlSize}>
    <SC.Input
      {...inputProps}
      onChange={({ currentTarget: { value, name } }) => onChange(value, name)}
    />
  </Control>
);

export default Input;
