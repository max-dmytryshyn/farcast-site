

import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
%matplotlib inline
import seaborn as sns

bakery_filepath = "../input/the-bread-basket/bread basket.csv"
bakery_data = pd.read_csv(bakery_filepath)

print("Setup Complete")
bakery_data

bakery_data['date_time'] = pd.to_datetime(bakery_data['date_time'])
date_bakery = bakery_data['date_time'].dt.date
bakery_data["date"] = date_bakery

time_bakery = bakery_data['date_time'].dt.time
bakery_data["time"] = time_bakery
del bakery_data["period_day"]
del bakery_data["weekday_weekend"]
del bakery_data["date_time"]
del bakery_data["Transaction"]
bakery_data

bakery_data.index.name = "transaction_id"
bakery_data = bakery_data.reset_index()
bakery_data
