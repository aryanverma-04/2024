# # import spacy
# # nlp = spacy.load("en_core_web_sm")
# # text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# # doc = nlp(text)

# # for token in doc:
# #     print(token.text, end = ": ")
# #     print(token.pos_, end = " ")
# #     print(spacy.explain(token.pos_), end=" \n")

# # import spacy
# # nlp = spacy.load("en_core_web_sm")
# # text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""
# # doc = nlp(text)

# # for token in doc:
# #     print(token.text, end=" :")
# #     print(token.pos_, end=" ")
# #     print(spacy.explain(token.pos_), end=" \n")


# # import spacy
# # nlp = spacy.load("en_core_web_sm")
# # text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# # doc = nlp(text)

# # for token in doc:
# #     print(token.text, end=" :")
# #     print(token.pos_, end=" ")
# #     print(spacy.explain(token.pos_), end=" \n")


# # import spacy
# # nlp = spacy.load("en_core_web_sm")
# # text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""
# # doc = nlp(text)

# # for token in doc:
# #     print(token.text, end=" :")
# #     print(token.pos_, end=" ")
# #     print(spacy.explain(token.pos_), end=" \n")

# # import spacy

# # nlp = spacy.load("en_core_web_sm")

# # text = """Fellow citizens of planet Earth, today marks a monumental leap in our shared journey. As I take this small step, I am humbled by the enormity of our collective achievement."""

# # doc = nlp(text)

# # for token in doc:
# #     print(token.text, end=" :")
# #     print(token.pos_, end=" ")
# #     print(spacy.explain(token.pos_), end=" \n")

# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae."""

# doc = nlp(text)

# for token in doc:
#     print(token.text, end=" :")
#     print(token.pos_, end=" ")
#     print(spacy.explain(token.pos_), end=" \n")

# import spacy
# nlp = spacy.load("en_core_web_sm")
# text = """The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae."""

# doc = nlp(text)
# for token in doc:
#     print(f"Text: {token.text}, POS: {token.pos_}, Explanation: {spacy.explain(token.pos_)}")


# # exp 6
# import nltk
# from nltk.corpus import treebank
# from nltk.tag import hmm

# # Download the Penn Treebank dataset for training
# nltk.download('treebank')

# # Load the Penn Treebank tagged sentences
# tagged_sentences = treebank.tagged_sents()

# # Split the data into training and testing sets
# train_size = int(0.8 * len(tagged_sentences))
# train_data = tagged_sentences[:train_size]
# test_data = tagged_sentences[train_size:]

# # Train the Hidden Markov Model
# hmm_tagger = hmm.HiddenMarkovModelTagger.train(train_data)

# # Evaluate the model on the test data
# accuracy = hmm_tagger.accuracy(test_data)
# print("HMM POS Tagging Accuracy: {:.2%}".format(accuracy))

# # Sample text for tagging
# sample_text = "The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae."

# # Tokenize the sample text
# tokens = nltk.word_tokenize(sample_text)

# # Use the trained HMM model to tag the tokens
# pos_tags = hmm_tagger.tag(tokens)

# # Display the POS tags for the sample text
# print("POS Tags for Sample Text:")
# for token, pos_tag in pos_tags:
#     print(f"{token}: {pos_tag}")

# import spacy

# nlp = spacy.load("en_core_web_sm")
# text = """The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae."""

# doc = nlp(text)

# for token in doc:
#     print(f"Word is: {token}")

#     print(f"POS Tag is: {token.pos_}")

#     print(f"Explanation: {spacy.explain(token.pos_)}\n")

