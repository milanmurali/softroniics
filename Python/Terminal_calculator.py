input1 = float(input("Enter first number: "))
input2 = float(input("Enter second number: "))

operator = input("Enter operator (+, -, *, /): ")

match operator:
    case "+":
        print(f"Result {input1+input2}")
    case "-":
        print(f"Result {input1-input2}")
    case "*":
        print(f"Result {input1*input2}")
    case "/":
        print(f"Result {input1/input2}")
    case _:
        print("Choose a Valid operator")
