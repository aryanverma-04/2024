import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist, LidstoneProbDist
from nltk.util import ngrams
from nltk.corpus import stopwords
import string

nltk.download('punkt')
nltk.download('stopwords')

def extract_ngrams(text, n):
    # Tokenize the text into words
    words = word_tokenize(text)

    # Remove stopwords and punctuation
    stop_words = set(stopwords.words('english'))
    words = [word.lower() for word in words if word.isalnum() and word.lower() not in stop_words]

    # Extract n-grams
    n_grams = list(ngrams(words, n))

    # Calculate n-gram frequency distribution
    n_gram_freq = FreqDist(n_grams)

    return n_gram_freq

def add_one_smoothing(n_gram_freq, vocabulary_size):
    # Calculate add-one smoothed probabilities using LidstoneProbDist
    prob_dist = LidstoneProbDist(n_gram_freq, 1, bins=vocabulary_size)

    return prob_dist

# Example text corpus
text_corpus = """
Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. 
"""

# Extract and analyze tri-grams (N=3)
tri_grams = extract_ngrams(text_corpus, 3)

# Vocabulary size is the number of unique tri-grams in the corpus
vocabulary_size = len(set(tri_grams))

# Apply add-one smoothing
smoothed_prob_dist = add_one_smoothing(tri_grams, vocabulary_size)

# Print the results
print("\nAryan verma, 20BCS3651\n")
print("Tri-grams Frequency Distribution:", tri_grams)
print("\nAdd-One Smoothed Probability Distribution:")
for n_gram in smoothed_prob_dist.samples():
    prob = smoothed_prob_dist.prob(n_gram)
    print(f"{n_gram}: {prob:.4f}")