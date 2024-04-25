# Chunking: Perform syntactic chunking on a given text, identifying and extracting noun phrases, verb phrases, etc.

import spacy

nlp = spacy.load("en_core_web_sm")
text = "In the heart of the bustling city, Mary walked briskly down the crowded streets, her mind racing with thoughts of the upcoming presentation"

doc = nlp(text)


# Initialize lists to store chunks
noun_phrases = []
verb_phrases = []
pronoun_phrases = []

for token in doc:
    pos_tag = token.pos_
    if pos_tag in ['NOUN', 'PROPN']:
        noun_phrases.append(token.text)
        print( 'Noun: ', token.text)
    elif pos_tag == 'PRON':
        print('Pronoun: ', token.text)
        pronoun_phrases.append(token.text)
    elif pos_tag == 'VERB' and token.dep_ != 'aux':
        verb_phrases.append(token.text)
        print( 'Verb: ',token.text)

# Print identified chunks
print("Noun Phrases:", noun_phrases)
print("Verb Phrases:", verb_phrases)
print("Pronoun Phrases:", pronoun_phrases)