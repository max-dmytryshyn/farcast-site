import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
%matplotlib inline
import numpy as np
np.random.seed(0) 

bakery_filepath = "../input/the-bread-basket/bread basket.csv"
bakery_data = pd.read_csv(bakery_filepath)

id_filepath = "../input/item-id-list/id_list_with_id.csv"
id_data = pd.read_csv(id_filepath)

weather_filepath = "../input/edinburg-weather/history_data.csv"
weather_data = pd.read_csv(weather_filepath)

print("Setup Complete")
bakery_data
