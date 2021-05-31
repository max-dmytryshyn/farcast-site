#pd.to_datetime(date, format = '%Y-%m-%d %H:%M:%S-%Z')

#formatting Date time to normal
weather_data["date_time"] = pd.to_datetime(weather_data["Date time"])
weather_data["date_time"] = pd.to_datetime(weather_data["date_time"]).dt.strftime('%d-%m-%Y %H')
weather_data["date_time"] = pd.to_datetime(weather_data["date_time"])
#weather_data["date_time"] = pd.to_datetime(weather_data["date_time"], format = '%d-%m-%Y %H');

#Creating new columns
date_weather = weather_data["date_time"].dt.strftime('%d-%m-%Y')
weather_data["date"] = date_weather

time_weather = weather_data['date_time'].dt.time
weather_data["time"] = time_weather

hour_weather = weather_data['date_time'].dt.hour
weather_data["hour"] = hour_weather


weather_data.drop_duplicates(subset=["date_time"], inplace=True)
weather_data.dropna(axis=1, how='all', inplace=True)
weather_data
