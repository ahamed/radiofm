import React, { createContext, useContext, useReducer } from "react";

import {
  ReducerAction,
  ReducerState,
  StoreContextProps,
} from "@declares/index";

const StoreContext = createContext<StoreContextProps>({
  state: { stations: [], errors: [], loading: false, activeStation: null },
  dispatch: (action: ReducerAction) => {},
});

interface StoreProviderProps {
  children?: JSX.Element | Array<JSX.Element>;
  initialState: ReducerState;
  reducer: (state: ReducerState, action: ReducerAction) => ReducerState;
}

const StoreProvider = ({
  children,
  initialState,
  reducer,
}: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export default StoreProvider;
