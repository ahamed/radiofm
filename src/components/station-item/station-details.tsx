import React, { MouseEvent } from "react";

/** Local dependencies. */
import { SingleStation } from "@declares/index";
import { useStoreContext } from "@hooks/useRadioStore";
import { setActiveStation } from "@store/actions";

/** Assets */
import prevSrc from "@assets/images/minus.png";
import nextSrc from "@assets/images/plus.png";

/** Styles */
import style from "@components/station-item/station-item.module.scss";
interface StationDetailsProps {
  station: SingleStation;
  show: boolean;
}

const StationDetails = ({
  station,
  show,
}: StationDetailsProps): JSX.Element => {
  const { state, dispatch } = useStoreContext();

  const navigateToNextStation = (event: MouseEvent) => {
    event.preventDefault();
    const { stations } = state;
    const index = stations.findIndex(
      (_station: SingleStation) => _station.id === station.id
    );

    if (index < stations.length - 1) {
      const nextStation = stations[index + 1];
      dispatch(setActiveStation(nextStation));
    }
  };

  const navigateToPrevStation = (event: MouseEvent) => {
    event.preventDefault();
    const { stations } = state;
    const index = stations.findIndex(
      (_station: SingleStation) => _station.id === station.id
    );

    if (index > 0) {
      const nextStation = stations[index - 1];
      dispatch(setActiveStation(nextStation));
    }
  };

  return (
    <div
      className={`${style["station-details"]} ${show ? style["active"] : ""}`}
    >
      <button
        className={style["station-details__prev"]}
        onClick={navigateToPrevStation}
        data-testid="prevStation"
      >
        <img src={prevSrc} alt="Previous" />
      </button>
      <img
        className={style["station-details__image"]}
        src={station.image}
        alt={station.name}
      />
      <button
        className={style["station-details__next"]}
        onClick={navigateToNextStation}
        data-testid="nextStation"
      >
        <img src={nextSrc} alt="Next" />
      </button>
    </div>
  );
};

export default StationDetails;
