import initialState from "../../../store/initialState";
import { missingValuesActionTypes } from "../../../actionTypes/setupActionTypes/missingValuesActionTypes/missingValuesActionTypes";

const MissingValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case missingValuesActionTypes.SET_IMPUTATION_TYPE:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            imputationType: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_NUMERIC_IMPUTATION:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            numericImputation: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_OTHER_NUMERIC_IMPUTATION:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            otherNumericImputation: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_CATEGORICAL_IMPUTATION:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            categoricalImputation: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_OTHER_CATEGORICAL_IMPUTATION:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            otherCategoricalImputation: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_NUMERIC_ITERATIVE_IMPUTER:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            numericIterativeImputer: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_ITERATIVE_IMPUTATION_ITERATIONS:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            iterativeImputationIterations: action.payload,
          },
        },
      };
    case missingValuesActionTypes.SET_CATEGORICAL_ITERATIVE_IMPUTER:
      return {
        ...state,
        setup: {
          ...state.setup,
          missingValues: {
            ...state.setup.missingValues,
            categoricalIterativeImputer: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default MissingValuesReducer;
