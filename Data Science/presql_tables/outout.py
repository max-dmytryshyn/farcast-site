items_index = []
for item in bakery_data.Item:
    for my_id in id_list.id:
        if id_list.loc[my_id, "item"] == item:
            items_index.append(int(my_id))
bakery_data.loc[:, "id"] = items_index

del bakery_data["Item"]

output = id_list
output.to_csv('id_list_with_id.csv', index=False)

output = bakery_data
output.to_csv('bakery_data_with_id.csv', index=False)
