import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
from nltk.corpus import stopwords
import string

def analyze_text_corpus(text_corpus):
    words = word_tokenize(text_corpus)

    stop_words = set(stopwords.words('english'))

    cleaned_words = []

    for word in words:
        lowercase_word = word.lower()
        if lowercase_word not in stop_words and lowercase_word.isalnum():
            cleaned_words.append(lowercase_word)

    words = cleaned_words
    word_freq = FreqDist(words)

    punctuation_chars = set()

    for c in text_corpus:
        if c in string.punctuation:
            punctuation_chars.add(c)
        
    return {
        'words': words,
        'word_frequency': word_freq,
        'punctuation_chars': punctuation_chars
    }

# Example text corpus
text_corpus = """
The MARCOs or Marine Commando Force of the Indian Navy comprise the toughest soldiers, who undergo rigorous navy training! to conduct swift and stealthy responses in Indian navy war.
"""

# Analyze the text corpus
analysis_result = analyze_text_corpus(text_corpus)

# Print results
print("\nWords:", analysis_result['words'])
print("\nWord Frequency:", analysis_result['word_frequency'])
print("\nPunctuation Characters:", analysis_result['punctuation_chars'])