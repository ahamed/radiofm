import { ReducerAction, ReducerState } from "@declares/index";

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case "LOAD_STATION_DATA": {
      return {
        ...state,
        stations: action.payload,
      };
    }

    case "SET_LOADING_STATE": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case "SET_ACTIVE_STATION": {
      return {
        ...state,
        activeStation: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
