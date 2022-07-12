from flask import Flask, request
import pandas as pd
from pycaret.datasets import get_data

index = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/index.csv')

app = Flask(__name__)


@app.route("/datasets")
def datasets():
    return {"files": index['Dataset'].tolist()}


@app.route("/loadData", methods=["POST"])
def loadData():
    requestJSON = request.json
    data = get_data(requestJSON['data'])
    if not requestJSON['fullData']:
        data = data.head(15)
    data = data.to_json(orient='records')
    return data


@app.route("/loadOrdinalColumnData", methods=["POST"])
def loadOrdinalColumnData():
    ordinalFeaturesOrder = {}
    requestJSON = request.json
    data = get_data(requestJSON['dataset'])
    for colName in requestJSON['columnName']:
        ordinalFeaturesOrder[colName] = data[colName].unique().tolist()
    return ordinalFeaturesOrder


if __name__ == "__main__":
    app.run(debug=True)
