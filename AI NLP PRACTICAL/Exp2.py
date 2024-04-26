# import string
# import random

# def generate_random_word(length, start_letter=None):
#     if(start_letter):
#         start_letter = start_letter.lower()
#     else:
#         start_letter = random.choice(string.ascii_lowercase)
    
#     if length < 1:
#         raise ValueError("The length should be atleast 1")
#     word = start_letter
#     while len(word) < length:
#         next_char = random.choice(string.ascii_lowercase)
#         word+=next_char
    
#     return word

# if __name__ == "__main__":
    
#     try: 
#         length = int(input("Enter the desired word length: "))
#         start_letter = input("Enter the starting letter(Press enter for a random character): ")

#         generated_word = generate_random_word(length, start_letter)
#         print("The random word generated: ", generated_word)
#     except ValueError as e:
#         print(f"Got caught in Error: {e}")

# import string
# import random

# def generate_random_word(length, start_letter = None):
#     if start_letter:
#         start_letter = start_letter.lower()
#     else:
#         start_letter = random.choice(string.ascii_lowercase)

#     word = start_letter

#     if length < 1:
#         raise ValueError("The length should atleast be 1")
    
#     while len(word) < length:
#         next_char = random.choice(string.ascii_lowercase)
#         word += next_char
    
#     return word

# try:
#     length = int(input("Enter the length of the word, you want to generate: "))
#     start_letter = input("Enter the starting character(Press Enter for any random character): ")
#     word = generate_random_word(length, start_letter)
#     print(f"The word generated is: {word}")
#     print(f"The generated word length is: {len(word)}")

# except Exception as e:
#     print(f"Got caught in Exception {e}")




# import string 
# import random

# def generate_random_word(length, start_letter = None):
    
#     if start_letter:
#         start_letter = start_letter.upper()

#     else:
#         start_letter = random.choice(string.ascii_uppercase)
    
#     word = start_letter
#     if length < 1:
#         raise ValueError("The length atleast should be 1")
    
#     while len(word) < length:
#         next_char = random.choice(string.ascii_uppercase)
#         word+=next_char
    
#     return word

# try:
#     length = int(input("Enter the length of the word you want to generate "))
#     start_letter = input("Entet the starting letter (Click enter for random starting character) ")
#     word = generate_random_word(length, start_letter)
#     print(f"The generated word is '{word}', and the length is {len(word)}")
# except ValueError as e:
#     print(f"Got caught in error: {e}")    

# import string
# import random

# def generate_random_word(length, start_letter = None):
#     if start_letter:
#         start_letter = start_letter.lower()
#     else:
#         start_letter = random.choice(string.ascii_lowercase)
    
#     word = start_letter

#     if length < 1:
#         raise ValueError("Length Shoud Be Atleast One")
    
#     while len(word) < length:
#         next_char = random.choice(string.ascii_lowercase)
#         word += next_char
    
#     return word

# try:
#     length = int(input("Enter the length of the word you want to generate: "))
#     start_letter = input("Enter the starting character(Press Enter for random one) ")
#     word = generate_random_word(length, start_letter)
#     print(f"Generated word is : {word}")

# except Exception as e:
#     print(f"Got caugth in Exception->{e}")