from flask import Flask, request
import pandas as pd
from pycaret.datasets import get_data
import requests
from bs4 import BeautifulSoup 
from flask_cors import CORS


index = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/index.csv')

u_agnt = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
    'Accept-Encoding': 'none',
    'Accept-Language': 'en-US,en;q=0.8',
    'Connection': 'keep-alive',
}

app = Flask(__name__)
CORS(app)

@app.route("")
def index():
    return "System is running..."

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
    ordinalFeaturesOrder['response'] = list(set(data[requestJSON['columnName']].tolist()))
    return ordinalFeaturesOrder


@app.route("/getChartTypes")
def getChartTypes():
    chart_urls = {'Basic': 'https://plotly.com/javascript/basic-charts/',
                  'Statistical': 'https://plotly.com/javascript/statistical-charts/',
                  'Scientific': 'https://plotly.com/javascript/scientific-charts/',
                  'Financial': 'https://plotly.com/javascript/financial-charts/',
                  'Maps': 'https://plotly.com/javascript/maps/',
                  '3D' : 'https://plotly.com/javascript/3d-charts/',
                  'Sub Plots': 'https://plotly.com/javascript/subplot-charts/'}
    charts = {}
    for chartType in chart_urls:
        response = requests.get(chart_urls[chartType], headers=u_agnt)
        html = response.text 
        b_soup = BeautifulSoup(html, 'html.parser')
        products = b_soup.findAll('div', {'class': '--item-meta'})
        child = []
        for div in products:
            child.append(div.find('span').text)
        charts[chartType] = child
    return charts
    


if __name__ == "__main__":
    app.run()
