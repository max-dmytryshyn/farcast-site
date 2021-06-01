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

