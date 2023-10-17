import { getInformation } from "@helpers/getInformation";
import { CustomDispatch } from "..";
import {
  addInformationSources,
  setListOfCourses,
  sourceLoaded,
} from "./appSlice";

export const getInformationSources = () => {
  return async (dispatch: CustomDispatch) => {
    const informationSources = await getInformation("informationSources");
    dispatch(addInformationSources(informationSources));
    dispatch(sourceLoaded());
  };
};

export const getTopics = (uuid: string | undefined) => {
  return async (dispatch: CustomDispatch) => {
    const informationSources = await getInformation(
      `informationSources/${uuid}/topics`
    );
    console.log(informationSources);
    dispatch(addInformationSources(informationSources));
    dispatch(sourceLoaded());
  };
};

export const getListOfCourses = () => {
  return async (dispatch: CustomDispatch) => {
    const listOfCourses = await getInformation("settingsInfoSrc");
    dispatch(setListOfCourses(listOfCourses[0].list));
  };
};
