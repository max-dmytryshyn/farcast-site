#PREDICTS!!!!!!!!
import pandas as pd
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor

#function for predicts for one item
#creating groupBy dataframe for one item
pastry_data = train_data
#pastry_data[["month", "day_of_week", "hour", "id"]
#           ] = pastry_data[["month", "day_of_week", "hour", "id"]].apply(pd.to_numeric)
    
t_y = pastry_data.amount
features = ['season_id', 'month', 'weekday_weekend_id', 'day_of_week', 'period_day_id', 'hour', 'id']
t_X = pastry_data[features]

train_X, val_X, train_y, val_y = train_test_split(t_X, t_y, random_state=1)

rf_model = RandomForestRegressor(random_state=1)
rf_model.fit(train_X, train_y)
predicted_y = rf_model.predict(val_X)

rf_model_on_full_data = RandomForestRegressor(random_state=1)
rf_model_on_full_data.fit(t_X, t_y)
rf_val_mae = mean_absolute_error(predicted_y, val_y)
print("Validation MAE for Random Forest Model: {}".format(rf_val_mae))
pastry_data.describe()

#function for predictions
def predict_item_sales(val_data):
    y = val_data.amount
    features = ['season_id', 'month', 'weekday_weekend_id', 'day_of_week', 'period_day_id', 'hour', 'id']
    X = val_data[features]
    
    predicted_y = rf_model_on_full_data.predict(X)
    return predicted_y

#create dataset and add the column of predicted values
oneday_data = val_data.loc[val_data.date == pd.to_datetime('2016-04-11')]
predicted_y = predict_item_sales(oneday_data)
predicted_y =[round(elem) for elem in pd.Series(predicted_y).values.tolist()]
oneday_data.reset_index()
oneday_data.insert(2, "predicted_amount", predicted_y, True)
del oneday_data["season_id"]
del oneday_data["month"]
del oneday_data["weekday_weekend_id"]
del oneday_data["day_of_week"]
del oneday_data["period_day_id"]
oneday_data.reset_index(inplace=True)
del oneday_data["index"]

#delete zero values
oneday_data = oneday_data.loc[oneday_data.predicted_amount != 0]

#delete column of real amount of sales
del oneday_data["amount"]
#rename result column title
oneday_data.rename({'predicted_amount': 'amount'}, axis=1, inplace=True)

#rename column for Max's SQL
oneday_data.rename({'id': 'product_id'}, axis=1, inplace=True)

#set index name like in Max's SQL
oneday_data.index.name = 'id'
oneday_data.reset_index(inplace=True)

oneday_data.head(20)

#oneday_data = oneday_data.reindex(columns=["predicted_amount", "id", "hour", "amount", "product_id", "date"])
oneday_data
output = oneday_data
output.to_csv('oneday_data_final_predicts.csv', index=False)
oneday_data
