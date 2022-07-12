import { dataTypesActionTypes } from "../../../actionTypes/setupActionTypes/dataTypesActionTypes/dataTypesActionTypes";

export const SetNumericFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_NUMERIC_FEATURES,
    payload: payload,
  };
};

export const SetCategoricalFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_CATEGORICAL_FEATURES,
    payload: payload,
  };
};

export const SetDateFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_DATE_FEATURES,
    payload: payload,
  };
};

export const SetIgnoredFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_IGNORED_FEATURES,
    payload: payload,
  };
};

export const SetSelectedFeatures = () => {
  return {
    type: dataTypesActionTypes.SET_SELECTED_FEATURES,
  };
};

export const ResetDataTypesData = () => {
  return {
    type: dataTypesActionTypes.RESET_DATATYPES_DATA,
  };
};
