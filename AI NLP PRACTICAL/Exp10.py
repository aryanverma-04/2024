# from nltk.stem import PorterStemmer
# from nltk.tokenize import word_tokenize

# ps = PorterStemmer()
# words = ['Happiness', 'Liked', 'Likewise', 'Hoped', 'Playing', 'Played', 'Dying', 'Laughing', 'Slept']

# for word in words:
#     print(f"Word: {word}, Stem: {ps.stem(word)}")



# from nltk.stem import PorterStemmer
# from nltk.tokenize import word_tokenize

# ps = PorterStemmer()
# words = ['Happiness', 'Liked', 'Likewise', 'Hoped', 'Playing', 'Played', 'Dying', 'Laughing', 'Slept']
# for w in words:
#     print(f"Word: {w}, Stem: {ps.stem(w)}")

# from nltk.tokenize import word_tokenize
# from nltk.stem import PorterStemmer

# ps = PorterStemmer()

# words = ['Happiness', 'Liked', 'Likewise', 'Hoped', 'Playing', 'Played', 'Dying', 'Laughing', 'Slept']
# print("\n")
# for token in words:
#     print(f"Word: {token}, Root Word: {ps.stem(token)}")


import nltk
from nltk.stem import PorterStemmer
ps = PorterStemmer()

words = ['Happiness', 'Liked', 'Likewise', 'Hoped', 'Playing', 'Played', 'Dying', 'Laughing', 'Slept']

for word in words:
    print(f"Wors is {word} and stem is: {ps.stem(word)}")