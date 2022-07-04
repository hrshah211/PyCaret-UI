const setupParameters = {
  missing_values: {
    categorical_imputation: [
      {
        code: "mode",
        name: "Mode",
        default: true
      },
      {
        code: "drop",
        name: "Drop"
      },
      {
        code: "other",
        name: "Other"
      }
    ],
    imputation_type: [
      {
        code: "simple",
        name: "Simple",
        default: true
      },
      {
        code: "iterative",
        name: "Iterative"
      },
      {
        code: "none",
        name: "None"
      }
    ],
    numeric_imputation: [
      {
        code: "mean",
        name: "Mean",
        default: true
      },
      {
        code: "median",
        name: "Median"
      },
      {
        code: "mode",
        name: "Mode"
      },
      {
        code: "drop",
        name: "Drop"
      },
      {
        code: "knn",
        name: "KNN"
      },
      {
        code: "other",
        name: "Other"
      }
    ],
    regressors: [
      {
        code: "lr",
        name: "Linear Regression"
      },
      {
        code: "lasso",
        name: "Lasso Regression"
      },
      {
        code: "ridge",
        name: "Ridge Regression"
      },
      {
        code: "en",
        name: "Elastic Net"
      },
      {
        code: "lar",
        name: "Least Angle Regression"
      },
      {
        code: "llar",
        name: "Lasso Least Angle Regression"
      },
      {
        code: "omp",
        name: "Orthogonal Matching Pursuit"
      },
      {
        code: "br",
        name: "Bayesian Ridge"
      },
      {
        code: "ard",
        name: "Automatic Relevance Determination"
      },
      {
        code: "par",
        name: "Passive Aggressive Regressor"
      },
      {
        code: "ransac",
        name: "Random Sample Consensus"
      },
      {
        code: "tr",
        name: "TheilSen Regressor"
      },
      {
        code: "huber",
        name: "Huber Regressor"
      },
      {
        code: "kr",
        name: "Kernel Ridge"
      },
      {
        code: "svm",
        name: "Support Vector Regression"
      },
      {
        code: "knn",
        name: "K Neighbors Regressor"
      },
      {
        code: "dt",
        name: "Decision Tree Regressor"
      },
      {
        code: "rf",
        name: "Random Forest Regressor"
      },
      {
        code: "et",
        name: "Extra Trees Regressor"
      },
      {
        code: "ada",
        name: "AdaBoost Regressor"
      },
      {
        code: "gbr",
        name: "Gradient Boosting Regressor"
      },
      {
        code: "mlp",
        name: "MLP Regressor"
      },
      {
        code: "xgboost",
        name: "Extreme Gradient Boosting"
      },
      {
        code: "lightgbm",
        name: "Light Gradient Boosting Machine",
        default: true
      },
      {
        code: "catboost",
        name: "CatBoost Regressor"
      }
    ]
  }
};

export default setupParameters;
