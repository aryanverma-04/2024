from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad

def encrypt_aes(plaintext, key):
    cipher = AES.new(key, AES.MODE_CBC)
    ciphertext = cipher.encrypt(pad(plaintext.encode(), AES.block_size))
    iv = cipher.iv
    return iv + ciphertext

def decrypt_aes(ciphertext, key):
    iv = ciphertext[:AES.block_size]
    ciphertext = ciphertext[AES.block_size:]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)
    return plaintext.decode()

# Example usage
plaintext = "aryan verma!"
key = get_random_bytes(AES.block_size)
print("Plaintext:", plaintext)

encrypted_data = encrypt_aes(plaintext, key)
print("Encrypted Data:", encrypted_data)

decrypted_data = decrypt_aes(encrypted_data, key)
print("Decrypted Data:", decrypted_data)
