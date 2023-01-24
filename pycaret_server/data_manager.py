import pandas as pd
from pycaret.datasets import get_data
from config import dataset_index

def get_dataset_names():
    return dataset_index['Dataset'].tolist()

def get_dataset(dataset_name):
    return get_data(dataset_name)
