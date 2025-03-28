import pickle

with open('./src/random_forest_model.pkl', 'rb') as file:
    data = pickle.load(file)

print(type(data))  # Shows the type of the loaded object
print(data)        # Prints the contents of the object
