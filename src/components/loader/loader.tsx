import React from "react";

/** Styles */
import style from "@components/loader/loader.module.scss";

const Loader = (): JSX.Element => (
  <div className={style["loader"]} data-testid="loader"></div>
);

export default Loader;
