import React, { MouseEvent } from "react";

/** Local Dependencies. */
import { useStoreContext } from "@hooks/useRadioStore";
import { setActiveStation } from "@store/actions";

/** Types */
import { SingleStation } from "@declares/index";

/** Styles */
import style from "@components/station-item/station-item.module.scss";

/** Components */
import StationDetails from "@components/station-item/station-details";

interface StationItemProps {
  station: SingleStation;
}

const StationItem = ({ station }: StationItemProps): JSX.Element => {
  const { state, dispatch } = useStoreContext();

  const handleItemClick = (event: MouseEvent) => {
    event.preventDefault();
    const selectedStation =
      state.activeStation?.id === station.id ? null : station;
    dispatch(setActiveStation(selectedStation));
  };

  return (
    <div className={style["station-item"]}>
      <StationDetails
        station={station}
        show={state?.activeStation?.id === station.id}
      />

      <div className={style["station-item__wrapper"]} onClick={handleItemClick}>
        <div className={style["station-item__wrapper-name"]}>
          {station.name}
        </div>
        <div className={style["station-item__wrapper-frequency"]}>
          {station.frequency}
        </div>
        <div className={style["station-item__wrapper-click-area"]}></div>
      </div>
    </div>
  );
};

export default StationItem;
