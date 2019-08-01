import React from "react";

import * as SC from "./styles";
import { Props } from "./types";
import Button from "../../../patterns/Button";
import Input from "../../../patterns/Input";

const Toolbar: React.FC<Props> = ({
  filter,
  setFilter,
  addNewEditingCustomer
}) => {
  return (
    <SC.Container>
      <Input label="Filter" name="filter" value={filter} onChange={setFilter} />
      <Button onClick={addNewEditingCustomer}>Add Customer</Button>
    </SC.Container>
  );
};

export default Toolbar;
