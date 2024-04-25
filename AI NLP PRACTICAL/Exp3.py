# import nltk
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords

# nltk.download('punkt')
# nltk.download('stopwords')

# def extract_morphology(text):
#     words = word_tokenize(text.lower())
#     # print(words)

#     stop_words = set(stopwords.words('english'))
#     # print(stop_words)

#     clean_words = []

#     for word in words:
#         lowercase_word = word.lower()
#         if lowercase_word not in stop_words and lowercase_word.isalnum():
#             clean_words.append(lowercase_word)
    
#     words = clean_words
#     # print(clean_words)

#     prefixes_set = set()
#     sufixes_set = set()
#     roots_set = set(words)

#     for word in words:
#         for i in range(1, len(word)):
#             prefixes_set.add(word[:i])
#             sufixes_set.add(word[-i:])
    
#     return prefixes_set, sufixes_set, roots_set

# text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# prefixes, suffixes, roots =  extract_morphology(text)
# print(f"prefixes: {prefixes}\n")
# print(f"suffixes: {suffixes}\n")
# print(f"roots: {roots}\n")

import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

#downloading NLTK stopwords and punkt

nltk.download('punkt')
nltk.download('stopwords')

def extract_morphology(text):
    words = word_tokenize(text.lower())

    stop_words = set(stopwords.words('english'))

    cleaned_words = []

    for word in words:
        if word not in stop_words and word.isalnum():
            cleaned_words.append(word.lower())
    
    words = cleaned_words

    prefixes = set()
    suffixes = set()
    roots = set(words)

    for word in words:
        for i in range(1, len(word)):
            prefixes.add(word[:i])
            suffixes.add(word[-i:])

    return prefixes, suffixes, roots


text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

prefixes, suffixes, roots = extract_morphology(text)

print(f"Prefixes: {prefixes}\n")
print(f"Suffixes: {suffixes}\n")
print(f"Roots: {roots}\n")

print(f"Length of Prefixes: {len(prefixes)}\n")
print(f"Length of Suffixes: {len(suffixes)}\n")
print(f"Length of Roots: {len(roots)}\n")