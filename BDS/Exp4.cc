// Ceaser cipher Symmetric

#include <iostream>
#include <string>

using namespace std;

string encrypt(string message, int key) {
    string encrypted_message = "";
    for (char& c : message) {
        if (isalpha(c)) {
            char shift = islower(c) ? 'a' : 'A';
            char encrypted_char = ((c - shift + key) % 26) + shift;
            encrypted_message += encrypted_char;
        } else {
            encrypted_message += c;
        }
    }
    return encrypted_message;
}

string decrypt(string encrypted_message, int key) {
    string decrypted_message = "";
    for (char& c : encrypted_message) {
        if (isalpha(c)) {
            char shift = islower(c) ? 'a' : 'A';
            char decrypted_char = ((c - shift - key + 26) % 26) + shift;
            decrypted_message += decrypted_char;
        } else {
            decrypted_message += c;
        }
    }
    return decrypted_message;
}

int main() {
    string plaintext = "Big Data Security Lab";
    int key = 3;
    cout<<"Original message: "<<plaintext<<endl;
    string encrypted = encrypt(plaintext, key);
    cout << "Encrypted message: " << encrypted << endl;
    
    string decrypted = decrypt(encrypted, key);
    cout << "Decrypted message: " << decrypted << endl;
    
    return 0;
}