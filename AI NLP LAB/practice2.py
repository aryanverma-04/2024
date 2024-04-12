# # 1.     Word Analysis: Analyze a given text corpus and identify the key components, including words, punctuation, and special characters.

# import nltk
# from nltk.corpus import stopwords
# from nltk.tokenize import word_tokenize
# from nltk.probability import LidstoneProbDist, FreqDist
# from nltk.util import ngrams
# import string


# nltk.download('punkt')
# nltk.download('stopwords')

# def word_analysis(corpus):
#     stopword = set(stopwords.words('english'))
#     words = word_tokenize(corpus)
#     print("\nThe tokenized words are: ", words)

#     cleanedWords = []
#     for word in words:
#         lowercase = word.lower()
#         if lowercase not in stopword and lowercase.isalnum():
#             cleanedWords.append(word)

#     punctuation = set()
#     for c in corpus:
#         if c in string.punctuation:
#             punctuation.add(c)
    
#     freq_Dist = FreqDist(cleanedWords)

#     return{
#         'words': cleanedWords,
#         'punctuation': punctuation,
#         'Freq_Dist' : freq_Dist
#     }

# my_corpus = """Hello, My name is ARYAN, What is your's name. I belong to himachal pradesh"""

# analysis_result = word_analysis(my_corpus)
# print(analysis_result)

# 2.     Word Generation: Develop a program to generate random words based on specified criteria (e.g., length, starting letter).

# import string
# import random

# def generate_random_word(length, start_character = None):
#     if start_character:
#         start_character = start_character.lower()
#     else:
#         start_character = random.choice(string.ascii_lowercase)
    
#     if length < 2:
#         raise ValueError("The length of the word must be greater than 2")
    
#     word_generated = start_character

#     while len(word_generated) < length:
#         char = random.choice(string.ascii_lowercase)
#         word_generated+=char
    
#     return word_generated
# try:
#     length = int(input("Enter the length of word you want to generate: "))
#     start_character = input("Enter the starting character, If you want some random, Click Enter!! ")
#     word_generated = generate_random_word(length, start_character)
#     print("The word generated is ", word_generated)
# except ValueError as e:
#     print("Not able to execute succesfully, got some error : ", e)


# 3.     Morphology: Explore and analyze the morphological structure of words in a given text, focusing on prefixes, suffixes, and roots.

# import nltk
# from nltk.probability import LidstoneProbDist, FreqDist
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords
# from nltk.util import ngrams
# import string

# nltk.download('punkt')
# nltk.download('stopwords')

# def morphology_analysis(corpus):
#     stopword = set(stopwords.words('english'))
#     words = word_tokenize(corpus)

#     cleaned_words = []
#     for word in words:
#         lower_case = word.lower()
#         if lower_case not in stopword and lower_case.isalnum():
#             cleaned_words.append(word)

#     roots = set(cleaned_words)
#     prefixes = set()
#     suffixes = set()
#     for word in cleaned_words:
#         for i in range(1, len(word)):
#             prefixes.add(word[:i])
#             suffixes.add(word[-i:])
    
#     return roots, prefixes, suffixes

# text_corpus = """Hello my name is aryan , and I belongs to himachal pradesh"""
# roots, prefixes, suffixes = morphology_analysis(text_corpus)

# print("Roots: ", roots)
# print("prefixes: ", prefixes)
# print("suffixes: ", suffixes)

# print("Length Roots", len(roots))
# print("Length prefixes", len(prefixes))
# print("Length suffixes", len(suffixes))


# 1.     N-Grams: Implement a program to extract and analyze N-Grams (uni-grams, bi-grams, and tri-grams) from a given text corpus.


import nltk
from nltk.probability import LidstoneProbDist, FreqDist
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.util import ngrams
import string

nltk.download('punkt')
nltk.download('stopwords')

def extract_ngrams(corpus, value):
    stopword = set(stopwords.words('english'))
    words = word_tokenize(corpus)

    cleaned_words = []
    for word in words:
        lower_case = word.lower()
        if lower_case not in stopword and lower_case.isalnum():
            cleaned_words.append(word)

    my_ngrams = list(ngrams(cleaned_words, value))
    print("Generated N-Grams are: ", my_ngrams)

    freq_dist = FreqDist(my_ngrams)
    print("\n The n_gram_freq are", freq_dist, "\n")

    return freq_dist

def add_one_smoothing(my_ngrams, vocab_size):
    smoothed_grams = LidstoneProbDist(my_ngrams, 1, bins=vocab_size)
    return smoothed_grams

text_corpus = """Hello my name is aryan , and I belongs to himachal pradesh"""
my_ngrams = extract_ngrams(text_corpus, 3)

for items, freq in my_ngrams.items():
    print({items}, {freq})

vocab_size = len(set(my_ngrams))

smoothed_grams = add_one_smoothing(my_ngrams, vocab_size)

for n_gram in smoothed_grams.samples():
    prob = smoothed_grams.prob(n_gram)
    print(f"{n_gram}: {prob:.4f}")
