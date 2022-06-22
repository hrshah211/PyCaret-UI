from flask import Flask, request, jsonify
import pandas as pd
from pycaret.datasets import get_data

index = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/index.csv')

app = Flask(__name__)


@app.route("/datasets")
def datasets():
    
    print("hi")
    return jsonify({"files": index['Dataset'].tolist()})


@app.route("/loadData", methods=["POST"])
def loadData():
    requestJSON = request.json
    data = get_data(requestJSON['data'])
    if not requestJSON['fullData']:
        data = data.head(15)
    data = data.to_json(orient='records')
    return data


if __name__ == "__main__":
    app.run(debug=True)
