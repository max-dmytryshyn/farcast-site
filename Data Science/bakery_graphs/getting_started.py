

import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
%matplotlib inline
import seaborn as sns

bakery_filepath = "../input/the-bread-basket/bread basket.csv"
bakery_data = pd.read_csv(bakery_filepath)

print("Setup Complete")



bakery_data['date_time'] = pd.to_datetime(bakery_data['date_time'])

date_bakery = bakery_data['date_time'].dt.date
bakery_data["date"] = date_bakery

time_bakery = bakery_data['date_time'].dt.time
bakery_data["time"] = time_bakery

hour_bakery = bakery_data['date_time'].dt.hour
bakery_data["hour"] = hour_bakery

month_bakery = bakery_data['date_time'].dt.month
bakery_data["month"] = month_bakery

day_of_week_bakery = bakery_data['date_time'].dt.dayofweek
bakery_data["day_of_week"] = day_of_week_bakery

#datetime_series.dt.month
bakery_data.head()

