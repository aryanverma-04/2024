# Experiment 4
import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist, LidstoneProbDist
from nltk.util import ngrams
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('stopwords')

def extract_ngrams(text, n):
    # Tokenize the text into words
    words = word_tokenize(text)

    # Remove stopwords and punctuation
    stop_words = set(stopwords.words('english'))

    cleaned_words = []
    for word in words:
        lowercase_word = word.lower()
        if lowercase_word not in stop_words and lowercase_word.isalnum():
            cleaned_words.append(word)
    
    words = cleaned_words
    # Extract n-grams

    n_grams = list(ngrams(words, n))
    print("\n The n-grams are", n_grams, "\n")

    # Calculate n-gram frequency distribution

    n_gram_freq = FreqDist(n_grams)
    print("\n The n_gram_freq are", n_gram_freq, "\n")

    # Append ('lazy', 'dog', 'eats') to the frequency distribution
    # n_gram_freq[('lazy', 'dog', 'eats')] = 0
    # n_gram_freq[('jumps', 'lazy', 'dog')] = 0
    
    return n_gram_freq

def add_one_smoothing(n_gram_freq, vocabulary_size):
    # Calculate add-one smoothed probabilities using LidstoneProbDist
    prob_dist = LidstoneProbDist(n_gram_freq, 1, bins=vocabulary_size)

    return prob_dist



# Example text corpus
text_corpus = """
The quick brown fox jumps over the lazy dog.
"""

# Extract and analyze tri-grams (N=3)
tri_grams = extract_ngrams(text_corpus, 3)

# Print the frequency distribution of tri-grams
print("Tri-grams Frequency Distribution:")
for n_gram, freq in tri_grams.items():
    print(f"{n_gram}: {freq}")

# Vocabulary size is the number of unique tri-grams in the corpus
vocabulary_size = len(set(tri_grams))

# Apply add-one smoothing
smoothed_prob_dist = add_one_smoothing(tri_grams, vocabulary_size)

# Print the results
print("Tri-grams Frequency Distribution:", tri_grams)
print("\nAdd-One Smoothed Probability Distribution:")
for n_gram in smoothed_prob_dist.samples():
    prob = smoothed_prob_dist.prob(n_gram)
    print(f"{n_gram}: {prob:.4f}")
