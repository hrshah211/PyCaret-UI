import { dataTypesActionTypes } from "../../../actionTypes/setupActionTypes/dataTypesActionTypes/dataTypesActionTypes";
import initialState from "../../../store/initialState";

const DataTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypesActionTypes.SET_NUMERIC_FEATURES:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            numericFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_CATEGORICAL_FEATURES:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            categoricalFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_DATE_FEATURES:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            dateFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_TEXT_FEATURES:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            textFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_KEEP_FEATURES:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            keepFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_IGNORED_FEATURES:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            ignoredFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_SELECTED_FEATURES:
      const selectedFeatures = state.setup.dataTypes.numericFeatures
        .concat(
          state.setup.dataTypes.categoricalFeatures,
          state.setup.dataTypes.dateFeatures,
          state.setup.dataTypes.textFeatures,
          state.setup.dataTypes.keepFeatures,
          state.setup.dataTypes.ignoredFeatures,
          state.setup.dataTypes.ordinalFeatures
        )
        .filter((element) => {
          return element !== undefined;
        });
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            selectedFeatures: [...selectedFeatures],
          },
        },
      };
    case dataTypesActionTypes.RESET_DATATYPES_DATA:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            numericFeatures: [],
            categoricalFeatures: [],
            dateFeatures: [],
            textFeatures: [],
            keepFeatures: [],
            ignoredFeatures: [],
            selectedFeatures: [],
            ordinalFeatures: [],
            ordinalFeaturesOrder: {},
          },
        },
      };
    case dataTypesActionTypes.SET_ORDINAL_FEATURE:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            ordinalFeatures: [...action.payload],
          },
        },
      };
    case dataTypesActionTypes.SET_ORDINAL_FEATURES_ORDER:
      return {
        ...state,
        setup: {
          ...state.setup,
          dataTypes: {
            ...state.setup.dataTypes,
            ordinalFeaturesOrder: { ...action.payload },
          },
        },
      };
    default:
      return state;
  }
};

export default DataTypesReducer;
