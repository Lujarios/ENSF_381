temperature = 28
is_sunny = False

# Conditional statements based on variables
if temperature > 25 and is_sunny:
  print("It's a hot and sunny day!")

elif temperature > 25 and not is_sunny:
  print("It's warm but not sunny.")

elif temperature <= 25 and is_sunny:
  print("It's a cool day with sunshine.")

else:
  print("It's a cool and cloudy day.")

