import React from "react";

import * as SC from "./styles";
import { Props } from "./types";
import Item from "../../../patterns/List/Item";
import { EditIcon, DeleteIcon } from "../../../icons";
import Control, { CONTROL_SIZES } from "../../../patterns/Control";

const CustomerItem: React.FC<Props> = ({
  customer,
  setEditingCustomer,
  deleteCustomer
}) => {
  const { firstName, dateOfBirth, id, lastName } = customer;
  return (
    <Item key={id}>
      <div>
        <Control size={CONTROL_SIZES.SMALL} label="Name:">
          <SC.Text>{`${firstName} ${lastName}`}</SC.Text>
        </Control>
        <Control size={CONTROL_SIZES.SMALL} label="Date of Birth:">
          <SC.Text>{new Date(dateOfBirth).toDateString()}</SC.Text>
        </Control>
      </div>
      <SC.Container>
        <EditIcon onClick={() => setEditingCustomer(customer)} />
        <DeleteIcon onClick={() => deleteCustomer(customer.id)} />
      </SC.Container>
    </Item>
  );
};

export default CustomerItem;
