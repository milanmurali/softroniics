# Class Definition
class Person:
    
    def __init__(self, name, age):  # Constructor
        self.name = name
        self.age = age

    def greet(self):
        return f"My name is {self.name} and I am {self.age} years old."


# Object creation
p1 = Person("Alice", 25)
print(p1.greet())
print(p1.name)
print(p1.age)
# 

# inheritence
class Employee(Person):  # Inherits from Person
    def __init__(self, name, age, emp_id):
        super().__init__(name, age)
        self.emp_id = emp_id


    def show_id(self):
        return f"Employee ID: {self.emp_id} of {self.name}"

e1 = Employee("Bob", 30, "E123")
print(e1.greet())
print(e1.show_id())
