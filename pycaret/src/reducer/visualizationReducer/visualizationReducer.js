import defaultChart from "../../store/defaultChart";
import initialState from "../../store/initialState";
import { visualizationActionTypes } from "../../actionTypes/visualizationActionTypes/visualizationActionTypes";

const VisualizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case visualizationActionTypes.SET_CHART_TYPES:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          chartTypes: action.payload,
        },
      };
    case visualizationActionTypes.ADD_CHART:
      let charts = [];
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
      const currentCharts = [...state.visualization.charts];
      const chartsAfterDelete = currentCharts.filter((chart) => chart.chartId !== action.payload);
      for (let i = 0; i < chartsAfterDelete.length; i++) {
        chartsAfterDelete[i] = { ...chartsAfterDelete[i], chartId: i + 1 };
      }
      console.log(currentCharts, "---", chartsAfterDelete);
      return {
        ...state,
        visualization: {
          ...state.visualization,
          charts: [...chartsAfterDelete],
        },
      };
    default:
      return state;
  }
};

export default VisualizationReducer;
