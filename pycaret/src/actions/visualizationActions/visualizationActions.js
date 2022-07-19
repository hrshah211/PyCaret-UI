import { visualizationActionTypes } from "../../actionTypes/visualizationActionTypes/visualizationActionTypes";

export const SetChartTypes = (payload) => {
  return {
    type: visualizationActionTypes.SET_CHART_TYPES,
    payload: payload,
  };
};

export const AddChart = () => {
  return {
    type: visualizationActionTypes.ADD_CHART,
  };
};

export const DeleteChart = (payload) => {
  return {
    type: visualizationActionTypes.DELETE_CHART,
    payload: payload,
  };
};
