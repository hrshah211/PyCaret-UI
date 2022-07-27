import { presetActionTypes } from "../../../actionTypes/dataActionTypes/presetActionTypes/presetActionTypes";

export const SetSelectedDataset = (payload) => {
  return {
    type: presetActionTypes.SET_SELECTED_DATASET,
    payload: payload,
  };
};

export const SetCheckFullData = (payload) => {
  return {
    type: presetActionTypes.SET_CHECK_FULL_DATA,
    payload: payload,
  };
};

export const SetDataFiles = (payload) => {
  return {
    type: presetActionTypes.SET_DATA_FILES,
    payload: payload,
  };
};


export const SetLoadedData = (payload) => {
  return {
    type: presetActionTypes.SET_DATA,
    payload: payload,
  };
};


