import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Ensure NLTK resources are downloaded
nltk.download('punkt')
nltk.download('stopwords')

def extract_morphology(text):
    # Tokenize the text into words and convert them to lowercase
    words = word_tokenize(text.lower())

    # Remove stopwords and punctuation
    stop_words = set(stopwords.words('english'))
    
    cleaned_words = []

    for word in words:
        # print(word, "\n")
        lowercase_word = word.lower()
        if lowercase_word not in stop_words and lowercase_word.isalnum():
            cleaned_words.append(lowercase_word)

    words = cleaned_words
    print("\n",words)
    # Initialize sets to store prefixes, suffixes, and roots
    prefixes_set = set()
    suffixes_set = set()
    roots_set = set(words)

    # Extract prefixes and suffixes
    for word in words:
        for i in range(1, len(word)):
            prefixes_set.add(word[:i])  # Add prefixes to the prefixes set
            suffixes_set.add(word[-i:])  # Add suffixes to the suffixes set

    return prefixes_set, suffixes_set, roots_set

# Example text
text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# Analyze the morphology of the text
prefixes, suffixes, roots = extract_morphology(text)

# Print the results
print("\nPrefixes:", prefixes)
print("\nSuffixes:", suffixes)
print("\nRoots:", roots)

print("\nARYAN VERMA, 20BCS3651")
print("\nThe size of Prefixes is:", len(prefixes))
print("The size of suffixes is:", len(suffixes))
print("The size of roots is:", len(roots))
print("\n\n")
