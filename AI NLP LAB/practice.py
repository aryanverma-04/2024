# 1.     Word Analysis: Analyze a given text corpus and identify the key components, including words, punctuation, and special characters.

# import nltk
# from nltk.probability import FreqDist
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords
# import string

# nltk.download('punkt')
# nltk.download('stopwords')

# def analyze_given_text(text):
#     words = word_tokenize(text)
#     print(words)

#     stop_words = set(stopwords.words('english'))

#     cleaned_words = []

#     for word in words:
#         lowercase_word = word.lower()
#         if lowercase_word not in stop_words and lowercase_word.isalnum():
#             cleaned_words.append(lowercase_word)
    
#     words = cleaned_words
#     print("Cleaned Words: ", word)

#     punctuation = set()
#     for c in text:
#         if c in string.punctuation:
#             punctuation.add(c)
    
#     freq_dist = FreqDist(words)

#     return{
#         'words': words,
#         'punctuation' : punctuation,
#         'freqency' : freq_dist
#     }


# my_corpus = """Hello my name is Aryan! , What is your's name?. I belong to Himachal Pradesh, the land of gods"""
# result = analyze_given_text(my_corpus)
# print("\n\n",result)

# print("\n words: ", result['words'])
# print("\n punctuation: ", result['punctuation'])
# print("\n freqency: ", result['freqency'])


# 2.     Word Generation: Develop a program to generate random words based on specified criteria (e.g., length, starting letter).

# import string 
# import random

# def generate_random_word(length, start_char = None):
#     if start_char:
#         start_char = start_char.lower()
#     else:
#         start_char = random.choice(string.ascii_lowercase)
    
#     if length < 1:
#         raise ValueError("The length should be greater than zero")
    
#     word = start_char

#     while len(word) < length:
#         next_char = random.choice(string.ascii_lowercase)
#         word += next_char
#     return word

# try:
#     length = int(input("Enter the length of the word: "))
#     start_char = input("Enter a random character, or If you want don't want to just press enter ")

#     word_generated = generate_random_word(length, start_char)
#     print("The random word generated is : ", word_generated)

# except ValueError as e:
#     print("Got caught in except block due to ValueError")
#     print("\n The error is ", e)


# 3.     Morphology: Explore and analyze the morphological structure of words in a given text, focusing on prefixes, suffixes, and roots.

import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
from nltk.corpus import stopwords
import string

nltk.download('punkt')
nltk.download('stopwords')

def morphological_analysis(text):
    words = word_tokenize(text)
    stop_words = set(stopwords.words('english'))

    cleaned_words = []
    for word in words:
        lowercase_word = word.lower()
        if lowercase_word not in stop_words and lowercase_word.isalnum():
            cleaned_words.append(word)
    
    words = cleaned_words

    root = set(words)
    prefixes = set()
    suffixes = set()

    for word in words:
        for i in range(1, len(word)):
            prefixes.add(word[:i])
            suffixes.add(word[-i:])

    return root, prefixes, suffixes

text_corpus = "hello, my name is aryan. I'm currently in 4th year, I have my primary focus on web development. So please understand that I'm not able to foucs this much on NLP. Leave me alone"

roots, prefixes, suffixes = morphological_analysis(text_corpus)
print("\nRoot Words: ", roots)
print("\n prefixes Words: ", prefixes)
print("\n suffixes Words: ", suffixes)

print("\nARYAN VERMA, 20BCS3651")
print("\nThe size of Prefixes is:", len(prefixes))
print("The size of suffixes is:", len(suffixes))
print("The size of roots is:", len(roots))
print("\n\n")
