import React, { useEffect } from "react";

/** Local Dependencies. */
import { getStationData } from "@utils/index";
import { useStoreContext } from "@hooks/useRadioStore";
import { loadStationData, setLoadingState } from "@store/actions";

/** Components. */
import StationItem from "@components/station-item/station-item";
import Loader from "@components/loader/loader";

const StationList = (): JSX.Element => {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    /** Load the mock stations data asynchronously. */
    (async () => {
      dispatch(setLoadingState(true));
      const data = await getStationData();

      if (data) {
        dispatch(loadStationData(data));
      }

      dispatch(setLoadingState(false));
    })();
  }, [dispatch]);

  if (state.loading) {
    return <Loader />;
  }

  return (
    <div className="station-list">
      {state.stations.length > 0 &&
        state.stations.map((station) => (
          <StationItem key={station.id} station={station} />
        ))}
    </div>
  );
};

export default StationList;
