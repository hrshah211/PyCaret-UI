import initialState from "../../store/initialState";
import { missingValuesActionTypes } from "../../actionTypes/setupActionTypes/missingValuesActionTypes";

const MissingValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case missingValuesActionTypes.SET_IMPUTATION_TYPE:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          imputationType: action.payload,
        },
      };
    case missingValuesActionTypes.SET_NUMERIC_IMPUTATION:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          numericImputation: action.payload,
        },
      };
    case missingValuesActionTypes.SET_OTHER_NUMERIC_IMPUTATION:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          otherNumericImputation: action.payload,
        },
      };
    case missingValuesActionTypes.SET_CATEGORICAL_IMPUTATION:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          categoricalImputation: action.payload,
        },
      };
    case missingValuesActionTypes.SET_OTHER_CATEGORICAL_IMPUTATION:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          otherCategoricalImputation: action.payload,
        },
      };
    case missingValuesActionTypes.SET_NUMERIC_ITERATIVE_IMPUTER:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          numericIterativeImputer: action.payload,
        },
      };
    case missingValuesActionTypes.SET_ITERATIVE_IMPUTATION_ITERATIONS:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          iterativeImputationIterations: action.payload,
        },
      };
    case missingValuesActionTypes.SET_CATEGORICAL_ITERATIVE_IMPUTER:
      return {
        ...state,
        missingValues: {
          ...state.missingValues,
          categoricalIterativeImputer: action.payload,
        },
      };
    default:
      return state;
  }
};

export default MissingValuesReducer;
