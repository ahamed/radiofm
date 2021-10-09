import React from "react";

/** A single Station interface. */
export interface SingleStation {
  id: number;
  name: string;
  frequency: string;
  image: string;
}

/** The react reducer state interface. */
export interface ReducerState {
  stations: Array<SingleStation>;
  errors: Array<any>;
  loading: boolean;
  activeStation: SingleStation | null;
}

/** The react reducer action interface. */
export interface ReducerAction {
  type: string;
  payload?: any;
}

/**
 * The Store Context Provider's props.
 * @see @hooks/useRadioStore.tsx
 */
export interface StoreContextProps {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}
