from flask import Flask
from github import Github
import pandas as pd

g = Github("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")
repo = g.get_repo("pycaret/pycaret")
index = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/index.csv')

app = Flask(__name__)


@app.route("/datasets")
def datasets():
    return {"files": index['Dataset'].tolist()}


if __name__ == "__main__":
    app.run(debug=True)
