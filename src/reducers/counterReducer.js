import { actionTypes } from "../actions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return { count: state.count + 1 };

    case actionTypes.DECREMENT_COUNTER:
      return { count: state.count - 1 };

    case actionTypes.RESET_COUNTER:
      return { count: 0 };

    case actionTypes.CHANGE_COUNT:
      return {
        count: action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
