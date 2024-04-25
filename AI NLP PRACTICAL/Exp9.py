# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """In the heart of the bustling city, Mary walked briskly down the crowded streets, her mind racing with thoughts of the upcoming presentation"""
# doc = nlp(text)

# verb_phrases = []
# noun_phrases = []
# pronoun_phrases = []

# for token in doc:
#     pos_tag = token.pos_
#     if(pos_tag in ["NOUN", "PROPN"]):
#         print(f"Noun: {pos_tag}")
#         noun_phrases.append(token.text)
#     elif(pos_tag == "PRON"):
#         print(f"Pronoun: {pos_tag}")
#         pronoun_phrases.append(token.text)
#     elif(pos_tag == "VERB" and token.dep_ != "aux"):
#         print(f"Verb: {pos_tag}")
#         verb_phrases.append(token.text)

# # Print identified chunks
# print("Noun Phrases:", noun_phrases)
# print("Verb Phrases:", verb_phrases)
# print("Pronoun Phrases:", pronoun_phrases)

import spacy
nlp = spacy.load("en_core_web_sm")
text = """In the heart of the bustling city, Mary walked briskly down the crowded streets, her mind racing with thoughts of the upcoming presentation"""
doc = nlp(text)

noun_phrases = []
verb_phrases = []
pronoun_phrases = []

for token in doc:
    pos_tag = token.pos_
    if(pos_tag in ["NOUN", "PROPN"]):
        noun_phrases.append(token.text)
        print(f"Noun: {token.text}")
    elif(pos_tag == "PRON"):
        pronoun_phrases.append(token.text)
        print(f"Noun: {token.text}")
    elif(pos_tag =="VERB" and token.dep_!="aux"):
        verb_phrases.append(token.text)
        print(f"Verb: {token.text}")
    
print("Verb: ", verb_phrases)
print("Noun: ", noun_phrases)
print("Pronoun: ", pronoun_phrases)