

sales_data = bakery_data.groupby(['date', 'month', 'day_of_week', 'hour', 'Item']).apply(lambda df: df.hour.count())
sales_data = pd.DataFrame(sales_data)
sales_data.reset_index(inplace=True)
sales_data.rename(columns={0: 'amount'}, inplace=True)
sales_data.head(15)



pastry_data = sales_data.loc[(sales_data.Item == 'Pastry')]
pastry_data = pastry_data.dropna(axis=0)

pastry_data[["month", "day_of_week", "hour"]
           ] = pastry_data[["month", "day_of_week", "hour"]].apply(pd.to_numeric)

