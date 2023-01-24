from flask import Flask, request
from flask_restx import Api, Resource, fields
import requests
from bs4 import BeautifulSoup
from config import dataset_index, u_agnt, get_data
import data_manager
import chart_manager

app = Flask(__name__)
api = Api(app, version='1.0', title='PyCaret API',
          description='API for PyCaret UI.', default='PyCaret', default_label='')

@api.route('/datasets')
class Datasets(Resource):
    def get(self):
        return {"files": data_manager.get_dataset_names()}

@api.route('/loadData')
class LoadData(Resource):
    load_data_model = api.model('LoadData', {
        'data': fields.String(required=True, description='Dataset name'),
        'fullData': fields.Boolean(required=True, description='Return full data or just first 15 rows')
    })

    @api.expect(load_data_model)
    def post(self):
        requestJSON = request.json
        data = data_manager.get_data(requestJSON['data'])
        if not requestJSON['fullData']:
            data = data.head(15)
        return data.to_json(orient='records')

@api.route('/loadOrdinalColumnData')
class LoadOrdinalColumnData(Resource):
    load_ordinal_column_data_model = api.model('LoadOrdinalColumnData', {
        'dataset': fields.String(required=True, description='Dataset name'),
        'columnName': fields.String(required=True, description='Name of ordinal column')
    })

    @api.expect(load_ordinal_column_data_model)
    def post(self):
        requestJSON = request.json
        data = data_manager.get_data(requestJSON['dataset'])
        ordinal_features_order = {'response': list(set(data[requestJSON['columnName']].tolist()))}
        return ordinal_features_order

@api.route('/getChartTypes')
class GetChartTypes(Resource):
    def get(self):
        return chart_manager.get_chart_types()

if __name__ == "__main__":
    app.run()
