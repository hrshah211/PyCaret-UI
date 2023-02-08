import defaultChart from "../../store/defaultChart";
import initialState from "../../store/initialState";
import { visualizationActionTypes } from "../../actionTypes/visualizationActionTypes/visualizationActionTypes";

const VisualizationReducer = (state = initialState, action) => {
  let charts = [];
  switch (action.type) {
    case visualizationActionTypes.SET_CHART_TYPES:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          chartTypes: { Default: [{ chartName: "Select Chart Type", chartURL: "https://plotly.com/javascript/" }], ...action.payload },
        },
      };
    case visualizationActionTypes.ADD_CHART:
      charts = [];
      if (!state.visualization.charts) {
        charts = [defaultChart];
      } else {
        charts = [...state.visualization.charts, { ...defaultChart, chartId: state.visualization.charts.length + 1 }];
      }
      return {
        ...state,
        visualization: {
          ...state.visualization,
          charts: [...charts],
        },
      };
    case visualizationActionTypes.DELETE_CHART:
      charts = [...state.visualization.charts];
      const chartsAfterDelete = charts.filter((chart) => chart.chartId !== action.payload);
      for (let i = 0; i < chartsAfterDelete.length; i++) {
        chartsAfterDelete[i] = { ...chartsAfterDelete[i], chartId: i + 1 };
      }
      return {
        ...state,
        visualization: {
          ...state.visualization,
          charts: [...chartsAfterDelete],
        },
      };
    case visualizationActionTypes.SET_CHART_DETAILS:
      charts = [...state.visualization.charts];
      charts[charts.findIndex((chart) => chart.chartId === action.payload.chartId)] = action.payload;
      return {
        ...state,
        visualization: {
          ...state.visualization,
          charts: [...charts],
        },
      };
    case visualizationActionTypes.RESET_CHARTS_DATA:
      charts = [];
      if (state.visualization.charts.length > 0) {
        charts = [defaultChart];
      }
      return {
        ...state,
        visualization: {
          ...state.visualization,
          charts: [...charts],
        },
      };
    default:
      return state;
  }
};

export default VisualizationReducer;
