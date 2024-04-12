import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
from nltk.corpus import stopwords
import string

nltk.download('punkt')
nltk.download('stopwords')

def analyze_text_corpus(text):
    # Tokenize the text into words
    words = word_tokenize(text)
    # Remove stopwords and punctuation

    # print(stop_words)
    stop_words = set(stopwords.words('english'))

    cleaned_words = []

    for word in words:
        # print(word, "\n")
        lowercase_word = word.lower()
        if lowercase_word not in stop_words and lowercase_word.isalnum():
            cleaned_words.append(lowercase_word)

    words = cleaned_words
    # Calculate word frequency distribution
    word_freq = FreqDist(words)

    # for word, frequency in word_freq.items():
    #     print(f"Word: {word}, Frequency: {frequency}")

    # Identify punctuation and special characters
    punctuation_chars = set()

    for c in text:
        if c in string.punctuation:
            punctuation_chars.add(c)
        
    return {
        'words': words,
        'word_frequency': word_freq,
        'punctuation_chars': punctuation_chars
    }

# Example text corpus
text_corpus = """
The MARCOs or Marine Commando Force of the Indian Navy comprise the toughest soldiers, who undergo rigorous training to conduct swift and stealthy responses. MARCOs are modelled on the US Navy SEALS!
"""

# Analyze the text corpus
analysis_result = analyze_text_corpus(text_corpus)

# Print results
print("\nWords:", analysis_result['words'])
print("\nWord Frequency:", analysis_result['word_frequency'])
# for word, frequency in analysis_result['word_frequency'].items():
#     print(f"Word: {word}, Frequency: {frequency}")

print("\nPunctuation Characters:", analysis_result['punctuation_chars'])