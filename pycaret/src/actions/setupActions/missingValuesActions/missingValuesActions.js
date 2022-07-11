import { missingValuesActionTypes } from "../../../actionTypes/setupActionTypes/missingValuesActionTypes/missingValuesActionTypes";

export const SetImputationType = (payload) => {
  return {
    type: missingValuesActionTypes.SET_IMPUTATION_TYPE,
    payload: payload,
  };
};

export const SetNumericImputation = (payload) => {
  return {
    type: missingValuesActionTypes.SET_NUMERIC_IMPUTATION,
    payload: payload,
  };
};

export const SetOtherNumericImputation = (payload) => {
  return {
    type: missingValuesActionTypes.SET_OTHER_NUMERIC_IMPUTATION,
    payload: payload,
  };
};

export const SetCategoricalImputation = (payload) => {
  return {
    type: missingValuesActionTypes.SET_CATEGORICAL_IMPUTATION,
    payload: payload,
  };
};

export const SetOtherCategoricalImputation = (payload) => {
  return {
    type: missingValuesActionTypes.SET_OTHER_CATEGORICAL_IMPUTATION,
    payload: payload,
  };
};

export const SetNumericIterativeImputer = (payload) => {
  return {
    type: missingValuesActionTypes.SET_NUMERIC_ITERATIVE_IMPUTER,
    payload: payload,
  };
};

export const SetIterativeImputationIterations = (payload) => {
  return {
    type: missingValuesActionTypes.SET_ITERATIVE_IMPUTATION_ITERATIONS,
    payload: payload,
  };
};

export const SetCategoricalIterativeImputer = (payload) => {
  return {
    type: missingValuesActionTypes.SET_CATEGORICAL_ITERATIVE_IMPUTER,
    payload: payload,
  };
};
