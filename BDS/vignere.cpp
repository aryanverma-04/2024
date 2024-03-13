#include <iostream>
#include <cstring>

using namespace std;

string vigenereEncrypt(const string& plaintext, const string& key) {
    string ciphertext;
    int keyLength = key.length();
    int textLength = plaintext.length();

    for (int i = 0; i < textLength; ++i) {
        char plainChar = plaintext[i];
        char keyChar = key[i % keyLength];

        if (isalpha(plainChar)) {
            char baseChar = (isupper(plainChar)) ? 'A' : 'a';
            char encryptedChar = ((plainChar - baseChar + keyChar - 'A') % 26) + baseChar;
            ciphertext.push_back(encryptedChar);
        } else {
            ciphertext.push_back(plainChar);  // Non-alphabetic characters remain unchanged
        }
    }

    return ciphertext;
}

string vigenereDecrypt(const string& ciphertext, const string& key) {
    string decryptedtext;
    int keyLength = key.length();
    int textLength = ciphertext.length();

    for (int i = 0; i < textLength; ++i) {
        char cipherChar = ciphertext[i];
        char keyChar = key[i % keyLength];

        if (isalpha(cipherChar)) {
            char baseChar = (isupper(cipherChar)) ? 'A' : 'a';
            char decryptedChar = ((cipherChar - baseChar - keyChar + 'A' + 26) % 26) + baseChar;
            decryptedtext.push_back(decryptedChar);
        } else {
            decryptedtext.push_back(cipherChar);  // Non-alphabetic characters remain unchanged
        }
    }

    return decryptedtext;
}

int main() {
    string plaintext = "moon landing";
    string key = "SUN";

    // Encrypt the plaintext
    string ciphertext = vigenereEncrypt(plaintext, key);

    // Decrypt the ciphertext
    string decryptedtext = vigenereDecrypt(ciphertext, key);

    // Display results
    cout << "Original Text: " << plaintext << endl;
    cout << "Key: " << key << endl;
    cout << "Encrypted Text: " << ciphertext << endl;
    cout << "Decrypted Text: " << decryptedtext << endl;

    return 0;
}
