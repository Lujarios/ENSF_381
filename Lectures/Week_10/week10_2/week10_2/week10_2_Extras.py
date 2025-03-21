#f-String (Preferred in Python 3.6+)
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")

# .format() Method (Older Python 3.0+ Approach)
name = "Alice"
age = 25
print("My name is {} and I am {} years old.".format(name, age))

#f-String (Cleaner & Direct)
a, b = 5, 3
print(f"Sum: {a + b}")

#.format() (More Verbose)
print("Sum: {}".format(a + b))

#Speed Test
import timeit
name = "Alice"
age = 25

# Using f-string
time_fstring = timeit.timeit(lambda: f"My name is {name} and I am {age} years old.", number=1000000)
# Using .format()
time_format = timeit.timeit(lambda: "My name is {} and I am {} years old.".format(name, age), number=1000000)

print(f"f-string Time: {time_fstring}")
print(f".format() Time: {time_format}")

#Calling Functions Inside f""
def greet(name):
    return f"Hello, {name}!"

print(f"{greet('Bob')} Welcome to Python!")

#Formatting Floating-Point Numbers
pi = 3.1415926535
print(f"Value of Pi: {pi:.4f}")  # Rounds to 2 decimal places

#Using f"" with Dictionaries
user = {"name": "Alice", "age": 25}
print(f"User: {user['name']}, Age: {user['age']}")