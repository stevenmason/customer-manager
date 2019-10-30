enum ACTIONS {
  SET_CUSTOMERS = "SET_CUSTOMERS",
  SET_CUSTOMER = "SET_CUSTOMER",
  DELETE_CUSTOMER = "DELETE_CUSTOMER",
  SET_EDITING_CUSTOMER = "SET_EDITING_CUSTOMER",
  SET_EDITING_CUSTOMER_VALUE = "SET_EDITING_CUSTOMER_VALUE",
  SET_LOADING = "SET_LOADING",
  SET_FILTER = "SET_FILTER"
}

const DEFAULT_CUSTOMER = {
  id: "-1",
  firstName: "",
  lastName: "",
  dateOfBirth: ""
};

export { ACTIONS, DEFAULT_CUSTOMER };