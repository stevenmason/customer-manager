import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";

import { State } from "./store/types";
import { setLoading, setCustomers } from "./store/actions";
import App from "./App";
import { editingCustomer } from "./store/selectors";

const mapStateToProps = (state: State) => ({
  editingCustomer: editingCustomer(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  ...bindActionCreators(
    {
      setLoading,
      setCustomers
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
