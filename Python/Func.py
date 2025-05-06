# def test():
#     print("This is a test function.")
#     return "Test completed."

# test()
# print(test()) #return value of test function

# def test(argument):
#     print(argument)
#     return "Test completed."

# test("test") #call test function
# print(test("asddasd")) #return value of test function


def swap(a, b):
    a, b = b, a
    return a, b


a = 33
b = 44

print(a,b)
print(swap(a, b))
