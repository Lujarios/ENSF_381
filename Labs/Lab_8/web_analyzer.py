
import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/University_of_Calgary"
try:
    response = requests.get(url)
    response.raise_for_status() # Ensures the request was successful
    soup = BeautifulSoup(response.text, 'html.parser')
    print(f"Successfully fetched content from {url}")
except Exception as e:
    print(f"Error fetching content: {e}")

# 3: Data Analysis
print("\n----------------------------------")
print("Data Analysis")
headings = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
links = soup.find_all('a')
paragraphs = soup.find_all('p')

print(f"Number of headings: {len(headings)}")
print(f"Number of links: {len(links)}")
print(f"Number of paragraphs: {len(paragraphs)}")

# 4: Keyword Analysis
print("\n----------------------------------")
print("Keyword Analysis")
keyword = input("Enter a keyword to search: ")
text = soup.get_text()
count = text.lower().count(keyword.lower())
print(f"The keyword '{keyword}' appears {count} times in the webpage's content.")

# 5: Word Frequency Analysis
print("\n----------------------------------")
print("Word Frequency Analysis")
text = soup.get_text()
words = text.split()
word_count = {}
for word in words:
    word = word.lower()
    if word.isalpha():
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1

sorted_word_count = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
print("Top 5 most frequently occurring words:")
for i in range(5):
    print(f"{sorted_word_count[i][0]}: {sorted_word_count[i][1]}")

# 6: Finding the Longest Paragraph
print("\n----------------------------------")
print("Finding the Longest Paragraph")
longest_paragraph = ""
longest_paragraph_word_count = 0
for paragraph in paragraphs:
    words = paragraph.get_text().split()
    if len(words) >= 5 and len(words) > longest_paragraph_word_count:
        longest_paragraph = paragraph.get_text()
        longest_paragraph_word_count = len(words)

print(f"Longest paragraph (word count: {longest_paragraph_word_count}):")
print(longest_paragraph)

# 7: Visualizing Data
print("\n----------------------------------")
print("Visualizing Data")
import matplotlib.pyplot as plt 
 
labels = ['Headings', 'Links', 'Paragraphs'] 
values = [len(headings), len(links), len(paragraphs)] 
 
plt.bar(labels, values) 
plt.title('Group 3 Did This') 
plt.ylabel('Count') 
plt.show() 