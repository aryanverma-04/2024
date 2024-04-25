#include <iostream>
#include <string>
#include <cryptopp/aes.h>
#include <cryptopp/modes.h>
#include <cryptopp/filters.h>

using namespace CryptoPP;
using namespace std;

int main() {
    // Define the key and IV for AES encryption
    byte key[AES::DEFAULT_KEYLENGTH] = {'k', 'e', 'y', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '1', '1'};
    byte iv[AES::BLOCKSIZE] = {'i', 'v', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '1', '1', '1'};

    // Message to be encrypted
    string plainText = "Hello, AES!";

    // Encrypt using AES in CBC mode
    CBC_Mode<AES>::Encryption encryptor(key, sizeof(key), iv);
    string cipherText;
    StringSource(plainText, true, new StreamTransformationFilter(encryptor, new StringSink(cipherText)));

    // Display the encrypted message
    cout << "Encrypted Text (Hexadecimal): ";
    StringSource(cipherText, true, new HexEncoder(new StringSink(cout)));
    cout << endl;

    return 0;
}
