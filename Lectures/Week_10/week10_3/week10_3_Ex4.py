student_info = {
    'name': 'Alice',
    'age': 20,
    'grade': 'A+',
    'courses': ['Math', 'Physics', 'English']
}

# Print keys
print("Keys:")
for key in student_info.keys():
    print(key)
print() # Add an empty line to improve the readability of the output

# Print values
print("Values:")
for value in student_info.values():
    print(value)
print()

# Print both keys and values
print("Keys and Values:")
for key, value in student_info.items():
    print(f"{key}: {value}")

