my_dict = {"name": "Alice",
            "age": 25}
print(my_dict)  # Output: {'name': 'Alice', 'age': 25}
print(type(my_dict))  # Output
print(my_dict["name"])


# 1. Add new item
my_dict["city"] = "New York"
print(my_dict)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}

# 2. Update value
my_dict["age"] = 26
print(my_dict)  # Output: {'name': 'Alice', 'age': 26, 'city': 'New York'}
# 3. Delete item
del my_dict["name"]
print(my_dict)  # Output: {'age': 26, 'city': 'New York'}
# 4. Get value (safe)
print(my_dict.get("city"))
print(my_dict.get("country", "Not Found"))  # Output: Not Found

# 5. Keys, values, items
print(my_dict.keys())
print(my_dict.values())
print(my_dict.items())

list1 = list(my_dict.keys())
list1.append("country")
