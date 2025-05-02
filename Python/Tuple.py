my_tuple = (1, 2, 3, 4, 3)

# 1. Access item
item = my_tuple[1]
print(item)  # Output: 2

# 2. Count item
count = my_tuple.count(3)
print(count)  # Output: 2

# 3. Find index of item
index = my_tuple.index(3)
print(index)  # Output: 2

# 4. Concatenate tuples
new_tuple = my_tuple + (4, 5)
print(new_tuple)  # Output: (1, 2, 3, 4, 3, 4, 5)

# 5. Convert to list to modify
temp_list = list(my_tuple)
temp_list.append(6)
my_tuple = tuple(temp_list)
print(my_tuple)  # Output: (1, 2, 3, 4, 3, 6)