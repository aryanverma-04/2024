# Import the spaCy library
import spacy

# Load the English language model provided by spaCy
nlp = spacy.load("en_core_web_sm")

# Define the text to be analyzed
text = "The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. "

# Process the text using the loaded model
doc = nlp(text)

# Iterate over each token in the processed document
for token in doc:
    # Print the text of the token
    print(token.text, end=' ')
    
    # Print the part-of-speech (POS) tag of the token
    print(token.pos_, end=' ')
    
    # Print an explanation of the POS tag using spaCy's built-in function
    print(spacy.explain(token.pos_))

