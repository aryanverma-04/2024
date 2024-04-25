#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

// Function to encrypt a message using Substitution Cipher
string encrypt(string message, string key) {
    string encrypted_message = message;

    // Encrypt each character in the message
    for (char& c : encrypted_message) {
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            c = key[c - base];
        }
    }

    return encrypted_message;
}

// Function to decrypt a message using Substitution Cipher
string decrypt(string message, string key) {
    string decrypted_message = message;

    // Invert the key for decryption
    string inverted_key = key;
    for (int i = 0; i < key.length(); ++i) {
        inverted_key[key[i] - 'A'] = 'A' + i;
    }

    // Decrypt each character in the message
    for (char& c : decrypted_message) {
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            c = inverted_key[c - base];
        }
    }

    return decrypted_message;
}

int main() {
    string key = "ZYXWVUTSRQPONMLKJIHGFEDCBA"; // Example key

    string message;
    cout << "Enter a message to encrypt: ";
    getline(cin, message);

    // Encrypt the message
    string encrypted_message = encrypt(message, key);
    cout << "Encrypted message: " << encrypted_message << endl;

    // Decrypt the message
    string decrypted_message = decrypt(encrypted_message, key);
    cout << "Decrypted message: " << decrypted_message << endl;

    return 0;
}