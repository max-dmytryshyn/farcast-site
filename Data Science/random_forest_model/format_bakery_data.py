#finding bad rows
rare_items = [item for item in bakery_data.Item.unique()
              if bakery_data.loc[bakery_data.Item == item].count().Item < 500]
len(rare_items)

#delete rows with rare items from dataset
bakery_data = bakery_data[~bakery_data.Item.isin(rare_items)]

#Creating new columns
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

bakery_data["season_id"] = (bakery_data.month%12 + 3)//3

bakery_data.index.name = "transaction_id"
bakery_data = bakery_data.reset_index()


#don't count unknown pastries
bakery_data = bakery_data[(bakery_data.Item != "Afternoon with the baker")
                         & (bakery_data.Item != "Adjustment")]
bakery_data = bakery_data.dropna(axis=0)

#convert bakery_data["period_day"] to int values
periods_index = []
for item in bakery_data.period_day:
    if (item == 'morning'):
        periods_index.append(0)
    elif (item == 'afternoon'):
        periods_index.append(1)
    elif (item == 'evening'):
        periods_index.append(2)
    elif (item == 'night'):
        periods_index.append(3)
    else:
        periods_index.append(None)
bakery_data.loc[:, "period_day_id"] = periods_index


#convert bakery_data["period_day"] to int values
weekend_index = []
for item in bakery_data.weekday_weekend:
    if (item == 'weekday'):
        weekend_index.append(0)
    elif (item == 'weekend'):
        weekend_index.append(1)
    else:
        periods_index.append(None)
bakery_data.loc[:, "weekday_weekend_id"] = weekend_index
bakery_data
