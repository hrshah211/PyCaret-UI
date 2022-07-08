from flask import Flask, request
import pandas as pd
from pycaret.datasets import get_data
from flask_cors import CORS, cross_origin

index = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/index.csv')

app = Flask(__name__)
CORS(app)


@app.route("/datasets")
@cross_origin()
def datasets():
    return {"files": index['Dataset'].tolist()}


@app.route("/loadData", methods=["POST"])
@cross_origin()
def loadData():
    requestJSON = request.json
    data = get_data(requestJSON['data'])
    if not requestJSON['fullData']:
        data = data.head(15)
    data = data.to_json(orient='records')
    return data


if __name__ == "__main__":
    app.run(debug=True)
