import nltk
from nltk.corpus import treebank

# Download the Penn Treebank dataset for training
nltk.download('treebank')

# Load the Penn Treebank tagged sentences
tagged_sentences = treebank.tagged_sents()


# Split the data into training and testing sets
train_size = int(0.8 * len(tagged_sentences))
train_data = tagged_sentences[:train_size]
test_data = tagged_sentences[train_size:]


# Extract unique tags from the training data
tags = set()
for sentence in train_data:
    for _, tag in sentence:
        tags.add(tag)


# Initialize an empty transition matrix
transition_matrix = nltk.ConditionalFreqDist()

# Loop through each sentence in the training data
for sentence in train_data:
    # Add start and end tokens to the sentence

    # Initialize an empty list for the tagged sentence
    tagged_sentence = ['<s>']

    # Loop through each word-tag tuple in the sentence
    for _, tag in sentence:
        # Add only the tag to the tagged sentence list
        tagged_sentence.append(tag)

    # Add the end-of-sentence tag
    tagged_sentence.append('</s>')  
      
    # Extract all pairs of consecutive tags in the sentence
    tag_pairs = nltk.bigrams(tagged_sentence)
    
    # Increment the count for each tag transition in the matrix
    for prev_tag, curr_tag in tag_pairs:
        transition_matrix[prev_tag][curr_tag] += 1

# Initialize an empty emission matrix
emission_matrix = nltk.ConditionalFreqDist()

# Loop through each sentence in the training data
for sentence in train_data:
    # Loop through each word-tag tuple in the sentence
    for word, tag in sentence:
        # Convert word to lowercase and add the word-tag pair to the emission matrix
        word_lower = word.lower()
        emission_matrix[tag][word_lower] += 1


# Viterbi algorithm for POS tagging
def viterbi(sentence):
    pi = [{}]
    backpointer = [{}]

    # Initialization step
    for tag in tags:
        # Calculate the initial probability for each tag
        initial_prob = transition_matrix['<s>'].freq(tag) * emission_matrix[tag].freq(sentence[0].lower())
        # Store the initial probability
        pi[0][tag] = initial_prob
        # Set the initial backpointer to None
        backpointer[0][tag] = None

    # Forward pass
    for t in range(1, len(sentence)):
        pi.append({})
        backpointer.append({})
        for tag in tags:
            max_prob = max(pi[t-1][prev_tag] * transition_matrix[prev_tag].freq(tag) * emission_matrix[tag].freq(sentence[t].lower())
                          for prev_tag in tags)
            pi[t][tag] = max_prob
            backpointer[t][tag] = max(tags, key=lambda prev_tag: pi[t-1][prev_tag] * transition_matrix[prev_tag].freq(tag))

    # Backward pass
    best_path = [max(pi[-1], key=pi[-1].get)]
    for bp in reversed(backpointer[1:]):
        best_path.append(bp[best_path[-1]])

    return list(reversed(best_path))

# Evaluate the model on the test data
correct = total = 0
for sentence in test_data:
    words, actual_tags = zip(*sentence)
    predicted_tags = viterbi(words)
    # Count the number of correct predictions
    correct_count = 0
    for pred, actual in zip(predicted_tags, actual_tags):
        if pred == actual:
            correct_count += 1

    # Increment the total count by the number of actual tags
    total_count = len(actual_tags)

    # Update the overall counts
    correct += correct_count
    total += total_count

    # Print the sentence
    print("Sentence:", end=" ")
    for word in words:
        print(word, end=" ")
    print()

    # Print the predicted tags
    print("Predicted tags:", end=" ")
    for tag in predicted_tags:
        print(tag, end=" ")
    print()

    # Print the actual tags
    print("Actual tags:", end=" ")
    for tag in actual_tags:
        print(tag, end=" ")
    print()

    # Add a blank line for clarity
    print()
