# Define a dictionary
student_info = {
    'name': 'Alice',
    'age': 20,
    'grade': 'A+',
    'courses': ['Math', 'Physics', 'English']
}

# Accessing elements
student_name = student_info['name']
courses_taken = student_info['courses']

print("Original Dictionary:")
print("Student Name:", student_name)
print("Courses Taken:", courses_taken)

# Modifying elements
student_info['age'] = 21  # Update the age
student_info['courses'].append('History')  # Add a new course

print("Modified Dictionary:")
print("Updated Age:", student_info['age'])
print("Updated Courses:", student_info['courses'])

