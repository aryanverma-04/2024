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

