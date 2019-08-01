import React, { useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import CustomerModal from "./components/CustomerModal";
import { getCustomers } from "./api";
import { Props } from "./types";

const App: React.FC<Props> = ({
  setCustomers,
  setLoading,
  editingCustomer
}) => {
  useEffect(() => {
    async function fetchData() {
      setCustomers(await getCustomers());
      setLoading(false);
    }
    fetchData();
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      <Body />
      {editingCustomer && <CustomerModal />}
    </div>
  );
};

export default App;
