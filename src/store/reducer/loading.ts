import { Actions } from "../types";
import { ACTIONS } from "../constants";

const loading = (state: boolean = true, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return action.loading;
  }
  return state;
};

export default loading;
