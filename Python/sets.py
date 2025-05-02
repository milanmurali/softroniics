my_set = {1, 2, 3, 10}

# 1. Add item
my_set.add(4)
print(my_set) 
# # 2. Remove item
# my_set.remove(2)
# print(my_set)  # Output: {1, 3, 4}
# # 3. Discard item (no error if not present)
# my_set.discard(10)
# print(my_set)  # Output: {1, 3, 4}

# # 4. Update with another set
# my_set.update({5, 6})
# print(my_set)  # Output: {1, 3, 4, 5, 6}

# # 5. Clear all items
# my_set.clear()
# print(my_set)  # Output: set()
# # 6. Union of sets
# a = {1, 2}
# b = {2, 3}
# union_set = a.union(b)
# # print(union_set)  # Output: {1, 2, 3}
# intersection_set = a.intersection(b)
# print(intersection_set)  # Output: {2}