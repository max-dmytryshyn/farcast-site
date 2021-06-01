

def take_hour(custom_plot):
    if custom_plot[2] == 'hour':
        return bakery_data.loc[(bakery_data.Item == custom_plot[0]) &
                            (bakery_data.date == pd.to_datetime(custom_plot[1]))
                          ].groupby(custom_plot[2])[custom_plot[2]].count()
    if custom_plot[2] == 'month':
        return bakery_data.loc[(bakery_data.Item == custom_plot[0]) &
                            (bakery_data.month == custom_plot[1])
                          ].groupby(custom_plot[2])[custom_plot[2]].count()

def create_lineplots(custom_plots):
    for custom_plot in custom_plots:
        sns.lineplot(data=take_hour(custom_plot))
#hour_data = hour_data.set_index('hour')



today_top = bakery_data.loc[bakery_data.date == pd.to_datetime('2016-10-31')
               ].pivot_table(index='Item',
                             values='hour',
                             fill_value=0, 
                             aggfunc='count').sort_values(ascending=False, by='hour'
                                                         ).reset_index().rename(columns=
                                                                                {'hour': 'amount'})


yesterday_top = bakery_data.loc[bakery_data.date == pd.to_datetime('2016-10-30')
               ].groupby('Item').hour.count().sort_values(ascending=False
                                                         ).reset_index().rename(columns=
                                                                                {'hour': 'amount'})
today_top
#left.join(right, lsuffix='_CAN', rsuffix='_UK')
today_top.join(yesterday_top, lsuffix='_today', rsuffix='_yesterday')
