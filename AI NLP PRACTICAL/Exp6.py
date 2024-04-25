# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# doc = nlp(text)

# for token in doc:
#     print(token.text, end = ": ")
#     print(token.pos_, end = " ")
#     print(spacy.explain(token.pos_), end=" \n")

# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""
# doc = nlp(text)

# for token in doc:
#     print(token.text, end=" :")
#     print(token.pos_, end=" ")
#     print(spacy.explain(token.pos_), end=" \n")


# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# doc = nlp(text)

# for token in doc:
#     print(token.text, end=" :")
#     print(token.pos_, end=" ")
#     print(spacy.explain(token.pos_), end=" \n")


# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""
# doc = nlp(text)

# for token in doc:
#     print(token.text, end=" :")
#     print(token.pos_, end=" ")
#     print(spacy.explain(token.pos_), end=" \n")

# import spacy

# nlp = spacy.load("en_core_web_sm")

# text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# doc = nlp(text)

# for token in doc:
#     print(token.text, end=" :")
#     print(token.pos_, end=" ")
#     print(spacy.explain(token.pos_), end=" \n")

import spacy
nlp = spacy.load("en_core_web_sm")
text = """The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae."""

doc = nlp(text)

for token in doc:
    print(token.text, end=" :")
    print(token.pos_, end=" ")
    print(spacy.explain(token.pos_), end=" \n")