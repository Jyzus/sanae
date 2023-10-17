import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  appState: "loading" | "loaded" | "sourceSelected";
  sources: any;
  exam: any;
  listOfCourses: string[];
}

const initialState: InitialState = {
  appState: "loading", // loaded | loading
  sources: null,
  exam: null,
  listOfCourses: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    sourceLoading: (state) => {
      state.appState = "loading";
    },
    sourceLoaded: (state) => {
      state.appState = "loaded";
    },
    sourceSelected: (state) => {
      state.appState = "sourceSelected";
    },
    addInformationSources: (state, { payload }) => {
      state.sources = payload;
    },
    setListOfCourses: (state, { payload }) => {
      state.listOfCourses = payload;
    },
    addNewCourse: (state, { payload }) => {
      state.listOfCourses = [...state.listOfCourses, payload];
    },
  },
});

export const {
  sourceLoading,
  sourceLoaded,
  sourceSelected,
  addInformationSources,
  setListOfCourses,
  addNewCourse,
} = appSlice.actions;
