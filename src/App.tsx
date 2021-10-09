import React from "react";

/** Components */
import Container from "@components/container/container";
import StoreProvider from "@hooks/useRadioStore";
import reducer from "@store/reducer";

function App() {
  return (
    <StoreProvider
      initialState={{
        stations: [],
        errors: [],
        loading: false,
        activeStation: null,
      }}
      reducer={reducer}
    >
      <Container />
    </StoreProvider>
  );
}

export default App;
