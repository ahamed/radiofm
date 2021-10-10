import React from "react";

/** Local dependencies. */
import { useStoreContext } from "@hooks/useRadioStore";
import { setActiveStation } from "@store/actions";

/** Components */
import StationList from "@components/station-list/station-list";

/** Assets */
import backBtn from "@assets/images/back-arrow.png";
import powerBtn from "@assets/images/switch.png";

/** Styles */
import style from "@components/container/container.module.scss";

const Container = (): JSX.Element => {
  const { state, dispatch } = useStoreContext();

  return (
    <div className={style.container}>
      <div role="navigation" className={style["container__header"]}>
        <button
          title="Back"
          className={style["container__header-back"]}
          onClick={() => dispatch(setActiveStation(null))}
        >
          <img src={backBtn} alt="Back" />
        </button>
        <h1 className={style["container__header-text"]}>Stations</h1>
        <button
          title="Power"
          className={style["container__header-power"]}
          onClick={() => dispatch(setActiveStation(null))}
        >
          <img src={powerBtn} alt="Power" />
        </button>
      </div>

      <div role="main" className={style["container__body"]}>
        <StationList />
      </div>

      <div role="contentinfo" className={style["container__footer"]}>
        {state.activeStation && (
          <div className={style["container__footer-current"]}>
            <div className={style["container__footer-current-title"]}>
              Currently Playing
            </div>
            <div
              className={style["container__footer-current-name"]}
              data-testid="stationInFooter"
            >
              {state.activeStation.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
