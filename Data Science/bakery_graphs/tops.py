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
