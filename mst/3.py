# Morphology is a branch of linguistics that studies the structure and formation of words in a language. It focuses on understanding how words are built from smaller units called morphemes, which are the smallest meaningful units of language. Morphemes can be classified into several types based on their functions and positions within words. Here's a detailed explanation of the main types of morphemes:

# Roots:
# Roots are the core lexical units of words that carry the main meaning. They are typically free morphemes, meaning they can stand alone as words. For example, "play" in "playground" or "walk" in "walked" are roots. Roots are often derived from nouns, verbs, or adjectives and serve as the foundation upon which words are built.
# Prefixes:
# Prefixes are morphemes added to the beginning of a root word to modify its meaning or create a new word. They often indicate aspects such as negation, location, time, or quantity. For instance, in the word "unhappy," "un-" is a prefix indicating negation, while in "preheat," "pre-" suggests something happening before. Prefixes are bound morphemes, meaning they cannot stand alone as words.
# Suffixes:
# Suffixes are morphemes added to the end of a root word to change its grammatical function, form a different word, or indicate aspects such as tense, number, or comparison. For example, in "happily," "-ly" is a suffix indicating manner or quality, while in "cats," "-s" marks pluralization. Suffixes can be either inflectional (altering grammatical aspects) or derivational (creating new words or changing meaning), and like prefixes, they are bound morphemes.

# Import the necessary modules from NLTK for tokenization and accessing stopwords.
# Define a function named extract_morphology that takes a text input.
# Tokenize the input text into words and remove stopwords and non-alphanumeric characters.
# Initialize sets to store prefixes, suffixes, and roots of words.
# Iterate through the cleaned words and extract prefixes and suffixes by iterating over substrings of each word.
# Return the sets containing prefixes, suffixes, and roots.

# The provided code utilizes NLTK (Natural Language Toolkit) for text processing tasks. Firstly, it imports the required modules for word tokenization and accessing stopwords. Then, it defines a function called extract_morphology, designed to analyze the morphology of a given text input. Within this function, the text is tokenized into words, and preprocessing steps are performed to remove stopwords and non-alphanumeric characters, ensuring the analysis focuses on meaningful linguistic units. Subsequently, sets are initialized to store the prefixes, suffixes, and roots of words extracted from the cleaned text. Finally, the function iterates through the cleaned words to identify and collect prefixes and suffixes by examining substrings. The identified prefixes, suffixes, and roots are then returned as sets, providing insights into the morphological structure of the input text.









