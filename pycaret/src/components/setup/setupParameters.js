const setupParameters = {
  missing_values: {
    imputation_type: [
      { name: "Simple", code: 1 },
      { name: "Iterative", code: 2 },
    ],
    numeric_imputation: [
      { name: "Mean", code: 1 },
      { name: "Median", code: 2 },
      { name: "Zero", code: 3 },
    ],
    categorical_imputation: [
      { name: "Constant", code: 1 },
      { name: "Mode", code: 2 },
    ],
  },
};

export default setupParameters;
