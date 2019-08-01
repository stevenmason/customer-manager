import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";

import {
  setEditingCustomer,
  setEditingCustomerValue,
  setCustomer
} from "../../store/actions";
import { editingCustomer } from "../../store/selectors";
import { State } from "../../store/types";
import CustomerModal from "./CustomerModal";

const mapStateToProps = (state: State) => ({
  customer: editingCustomer(state)!
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  ...bindActionCreators(
    {
      setEditingCustomer,
      setEditingCustomerValue,
      setCustomer
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerModal);
