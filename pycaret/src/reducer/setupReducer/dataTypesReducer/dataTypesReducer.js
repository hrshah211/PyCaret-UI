import { dataTypesActionTypes } from "../../../actionTypes/setupActionTypes/dataTypesActionTypes/dataTypesActionTypes";
import initialState from "../../../store/initialState";

const DataTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypesActionTypes.SET_NUMERIC_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          numericFeatures: [...action.payload],
        },
      };
    case dataTypesActionTypes.SET_CATEGORICAL_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          categoricalFeatures: [...action.payload],
        },
      };
    case dataTypesActionTypes.SET_DATE_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          dateFeatures: [...action.payload],
        },
      };
    case dataTypesActionTypes.SET_IGNORED_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          ignoredFeatures: [...action.payload],
        },
      };
    case dataTypesActionTypes.SET_SELECTED_FEATURES:
      const selectedFeatures = state.dataTypes.numericFeatures
        .concat(state.dataTypes.categoricalFeatures, state.dataTypes.dateFeatures, state.dataTypes.ignoredFeatures)
        .filter((element) => {
          return element !== undefined;
        });
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          selectedFeatures: [...selectedFeatures],
        },
      };

    case dataTypesActionTypes.RESET_DATATYPES_DATA:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          numericFeatures: [],
          categoricalFeatures: [],
          dateFeatures: [],
          ignoredFeatures: [],
          selectedFeatures: [],
        },
      };
    default:
      return state;
  }
};

export default DataTypesReducer;
