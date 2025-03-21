num = 6
factorial_result = 1

print(f"Calculating factorial of {num}:")

for i in range(1, num + 1):
  factorial_result *= i
  print(f"Factorial after {i} iterations: {factorial_result}")

print(f"The factorial of {num} is: {factorial_result}")

