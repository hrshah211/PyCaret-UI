export const API_URL = {
  DATASETS: "/datasets",
  LOAD_DATA: "/loadData",
  LOAD_ORDINAL_COLUMN_DATA: "/loadOrdinalColumnData",
  GET_CHART_TYPES: "/getChartTypes",
};

export const getURL = (parameter) => {
  return "https://py-caret-api.herokuapp.com" + parameter;
  // return "http://127.0.0.1:5000" + parameter;
};
