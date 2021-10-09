import { SingleStation } from "@declares/index";
import data from "../data.json";

/** A mock function for loading the station data asynchronously. */
export const getStationData = (): Promise<Array<SingleStation>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
