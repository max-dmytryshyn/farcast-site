Creating dataframe of Item-Id
id_list = pd.DataFrame(bakery_data.Item.unique())
id_list.index.name = "id"
id_list.rename(columns={0: 'item'}, inplace=True)
id_list = id_list.reset_index()
id_list.head(92)
