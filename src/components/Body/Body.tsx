import React from "react";

import Toolbar from "./Toolbar";
import CustomerItem from "./CustomerItem";
import { Props } from "./types";
import * as SC from "./styles";
import List from "../../patterns/List";

const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

const Body: React.FC<Props> = ({
  customers,
  loading,
  setEditingCustomer,
  addNewEditingCustomer,
  filter,
  setFilter,
  deleteCustomer
}) => {
  console.log("render");
  return (
    <SC.Container>
      <Toolbar
        filter={filter}
        setFilter={setFilter}
        addNewEditingCustomer={addNewEditingCustomer}
      />
      <List loading={loading}>
        {customers.map(customer => (
          <CustomerItem
            key={customer.id}
            customer={customer}
            setEditingCustomer={setEditingCustomer}
            deleteCustomer={deleteCustomer}
          />
        ))}
      </List>
      <SC.Underline onClick={scrollToTop}>Back to top</SC.Underline>
    </SC.Container>
  );
};

export default Body;
