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

export const SetTextFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_TEXT_FEATURES,
    payload: payload,
  };
};

export const SetKeepFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_KEEP_FEATURES,
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

export const SetOrdinalFeatures = (payload) => {
  return {
    type: dataTypesActionTypes.SET_ORDINAL_FEATURE,
    payload: payload,
  };
};

export const SetOrdinalFeaturesOrder = (payload) => {
  return {
    type: dataTypesActionTypes.SET_ORDINAL_FEATURES_ORDER,
    payload: payload,
  };
};
