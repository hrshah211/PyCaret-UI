import requests
from bs4 import BeautifulSoup
from config import u_agnt

chart_urls = {'Basic': 'https://plotly.com/javascript/basic-charts/',
              'Statistical': 'https://plotly.com/javascript/statistical-charts/',
              'Scientific': 'https://plotly.com/javascript/scientific-charts/',
              'Financial': 'https://plotly.com/javascript/financial-charts/',
              'Maps': 'https://plotly.com/javascript/maps/',
              '3D' : 'https://plotly.com/javascript/3d-charts/',
              'Sub Plots': 'https://plotly.com/javascript/subplot-charts/'}

def get_chart_types():
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
