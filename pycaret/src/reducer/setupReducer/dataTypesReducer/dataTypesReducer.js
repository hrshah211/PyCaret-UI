import { dataTypesActionTypes } from "../../../actionTypes/setupActionTypes/dataTypesActionTypes/dataTypesActionTypes";
import initialState from "../../../store/initialState";

const DataTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypesActionTypes.SET_NUMERIC_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          numericFeatures: action.payload,
        },
      };
    case dataTypesActionTypes.SET_CATEGORICAL_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          categoricalFeatures: action.payload,
        },
      };
    case dataTypesActionTypes.SET_DATE_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          dateFeatures: action.payload,
        },
      };
    case dataTypesActionTypes.SET_IGNORED_FEATURES:
      return {
        ...state,
        dataTypes: {
          ...state.dataTypes,
          ignoredFeatures: action.payload,
        },
      };
    default:
      return state;
  }
};

export default DataTypesReducer;
