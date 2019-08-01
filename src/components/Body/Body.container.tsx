import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";

import {
  setEditingCustomer,
  setFilter,
  addNewEditingCustomer,
  deleteCustomer
} from "../../store/actions";
import { filteredCustomers, loading, filter } from "../../store/selectors";
import { State } from "../../store/types";
import Body from "./Body";

const mapStateToProps = (state: State) => ({
  customers: filteredCustomers(state),
  loading: loading(state),
  filter: filter(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  ...bindActionCreators(
    {
      setEditingCustomer,
      setFilter,
      addNewEditingCustomer,
      deleteCustomer
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
