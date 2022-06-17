from flask import Flask, request
from github import Github
import pandas as pd
from pycaret.datasets import get_data

g = Github("<ENTER GITHUB TOKEN>")
repo = g.get_repo("pycaret/pycaret")
index = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/index.csv')

app = Flask(__name__)


@app.route("/datasets")
def datasets():
    return {"files": index['Dataset'].tolist()}


@app.route("/loadData", methods=["POST"])
def loadData():
    dataset = request.json
    data = get_data(dataset)
    data = data.head(15).to_json(orient='records')
    return data


if __name__ == "__main__":
    app.run(debug=True)
