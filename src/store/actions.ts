import { SingleStation, ReducerAction } from "@declares/index";

export const loadStationData = (data: Array<SingleStation>): ReducerAction => {
  return {
    type: "LOAD_STATION_DATA",
    payload: data,
  };
};
export const setLoadingState = (data: boolean): ReducerAction => {
  return {
    type: "SET_LOADING_STATE",
    payload: data,
  };
};

export const setActiveStation = (data: SingleStation | null): ReducerAction => {
  return {
    type: "SET_ACTIVE_STATION",
    payload: data,
  };
};
