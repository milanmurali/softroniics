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


# def swap(a, b):
#     a, b = b, a
#     return a, b


# a = 33
# b = 44

# print(a,b)
# print(swap(a, b))


# def days(num):
#     years = num // 365
#     num = num % 365
#     months = num // 30
#     num = num % 30
#     weeks = num // 7
#     days = num % 7

#     print(f"Years: {years}, Months: {months}, Weeks: {weeks}, Days: {days}")


# ip = int(input("Enter the number of days: "))
# days(ip)


# def time(args):
#     hours = args // 3600
#     args = args % 3600
#     minutes = args // 60
#     seconds = args % 60
#     print(f"Hours: {hours}, Minutes: {minutes}, Seconds: {seconds}")

# ip = int(input("Seconds : "))
# time(ip)



# def rev(args):
#     rev = ""
#     while args > 0:
#         rev += str(args % 10)
#         args = args // 10
#     return rev

# print(rev(123))

# def pali(args):
#     defa = str(args)
#     rev = ""
#     while args > 0:
#         rev += str(args % 10)
#         args = args // 10
    
#     if defa == rev:
#         return True
#     else:
#         return False

# print(pali(123))
# print(pali(111))