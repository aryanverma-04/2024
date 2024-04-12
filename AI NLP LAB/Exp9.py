import spacy

nlp = spacy.load("en_core_web_sm")
text = "The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae."

doc = nlp(text)

for token in doc:
    pos_tag = token.pos_
    if pos_tag in ['NOUN', 'PROPN']:
        print(token.text, 'Noun')
    elif pos_tag == 'PRON':
        print(token.text, 'Pronoun')
    elif pos_tag == 'VERB' and token.dep_ != 'aux':
        print(token.text, 'Verb')