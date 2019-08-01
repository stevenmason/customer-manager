import React from "react";

import Props from "./types";
import Modal, {
  ModalBody,
  ModalTitle,
  ModalActions
} from "../../patterns/Modal";
import Input from "../../patterns/Input";
import Button from "../../patterns/Button";

const CustomerModal: React.FC<Props> = ({
  customer,
  setEditingCustomer,
  setEditingCustomerValue,
  setCustomer
}) => {
  const { firstName, lastName, dateOfBirth } = customer;
  return (
    <Modal onClose={() => setEditingCustomer(null)}>
      <ModalTitle>Customer:</ModalTitle>
      <ModalBody>
        <Input
          name="firstName"
          value={firstName}
          label="First Name"
          onChange={setEditingCustomerValue}
        />
        <Input
          name="lastName"
          value={lastName}
          label="Last Name"
          onChange={setEditingCustomerValue}
        />
        <Input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          label="Date of Birth"
          onChange={setEditingCustomerValue}
        />
      </ModalBody>
      <ModalActions>
        <Button onClick={() => setEditingCustomer(null)}>Cancel</Button>
        <Button
          onClick={() => {
            setCustomer(customer);
            setEditingCustomer(null);
          }}
        >
          Save
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default CustomerModal;
