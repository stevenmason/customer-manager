import { setFilter, addNewEditingCustomer } from "../../../store/actions";

export interface Props {
  filter: string;
  setFilter: typeof setFilter;
  addNewEditingCustomer: typeof addNewEditingCustomer;
}
