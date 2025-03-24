students = [
  {'name': 'Alice', 'grades': [85, 90, 92]},
  {'name': 'Bob', 'grades': [78, 85, 80]},
  {'name': 'Charlie', 'grades': [92, 88, 95]}]

def calculate_average(grades): # Function to calculate the average grade for a student.
  if len(grades) > 0:
      total = sum(grades) # A built-in function that calculates the sum of elements in a list
      return total / len(grades) 
  else:
      return 0

average_grades = {} # Dictionary to store average grades.
for student in students: # Calculate and store average grades for each student.
  name = student['name']
  grades = student['grades']
  average = calculate_average(grades)
  average_grades[name] = average

print("Student Average Grades:")
for name, average in average_grades.items():
  print(f"{name}: {average:.2f}")

