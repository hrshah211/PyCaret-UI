import { presetActionTypes } from "../../../actionTypes/dataActionTypes/presetActionTypes/presetActionTypes";

export const SetSelectedDataset = (payload) => {
  return {
    type: presetActionTypes.SET_SELECTED_DATASET,
    payload: payload,
  };
};
