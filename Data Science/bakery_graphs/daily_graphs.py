my_plots = [
    ('Bread', '2016-10-30', 'hour'),
    ('Coffee', '2016-10-30', 'hour'),
    ('Scandinavian', '2016-10-30', 'hour')
]

sns.set_style("darkgrid")
plt.figure(figsize=(10,6))
plt.title(f"Sales graph of items during your timescale")
create_lineplots(my_plots)
#sns.lineplot(data=take_hour('Scandinavian', '2016-10-30', 'hour'), label="Bread")
#sns.lineplot(data=take_hour('Coffee', '2016-10-30', 'hour'), label="Bread")

plt.xlabel("hour")
plt.ylabel("saled items")
