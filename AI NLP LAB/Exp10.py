# Building Chunker: Build a custom chunker using regular expressions or machine learning techniques and assess its performance on different text corpus.


from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize

ps = PorterStemmer()

# List of words
words = ['Happiness', 'Liked', 'Likewise', 'Hoped', 'Playing', 'Played', 'Dying', 'Laughing', 'Slept']

for w in words:
    print(w, ":", ps.stem(w))