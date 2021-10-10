import React, { createContext, useContext, useMemo, useReducer } from "react";

import {
  ReducerAction,
  ReducerState,
  StoreContextProps,
} from "@declares/index";

/** Create a Store Context with the state and dispatcher. */
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
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

/** Exporting a custom hook for using the store context. */
export const useStoreContext = () => useContext(StoreContext);

export default StoreProvider;
