lol = pd.Series(oneday_data.loc[(oneday_data.hour == 7)
                                                     ].amount).values.tolist()
oneday_real = pd.DataFrame()
for hour in oneday_data.hour.unique():
    for item_id in oneday_data.index.unique():
        oneday_real[str(hour)] = pd.Series(oneday_data.loc[(oneday_data.hour == hour)
                                                          ].amount).values.tolist()
        output = oneday_real
output.to_csv('oneday_real.csv', index=True)
