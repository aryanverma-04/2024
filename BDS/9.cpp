#include <iostream>
#include <fstream>
#include <set>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

set<int> prime; // a set will be the collection of prime numbers,
                // where we can select random primes p and q
int public_key;
int private_key;
int n;

// Function to fill the set of prime numbers
void primefiller() {
    // Method used to fill the primes set is Seive of Eratosthenes (a method to collect prime numbers)
    vector<bool> seive(250, true);
    seive[0] = false;
    seive[1] = false;
    for (int i = 2; i < 250; i++) {
        for (int j = i * 2; j < 250; j += i) {
            seive[j] = false;
        }
    } 
    // Filling the prime numbers
    for (int i = 0; i < seive.size(); i++) {
        if (seive[i])
            prime.insert(i);
    }
}

// Function to pick a random prime number and erase it from the set
int pickrandomprime() {
    int k = rand() % prime.size();
    auto it = prime.begin();
    while (k--)
        it++;
    int ret = *it;
    prime.erase(it);
    return ret;
}

// Function to generate public and private keys
void setkeys() {
    int prime1 = pickrandomprime(); // First prime number
    int prime2 = pickrandomprime(); // Second prime number

    n = prime1 * prime2;
    int fi = (prime1 - 1) * (prime2 - 1);
    int e = 2;
    while (1) {
        if (__gcd(e, fi) == 1)
            break;
        e++;
    } 

    public_key = e;
    int d = 2;
    while (1) {
        if ((d * e) % fi == 1)
            break;
        d++;
    }
    private_key = d;
}

// Function to encrypt a given number
long long int encrypt(double message) {
    int e = public_key;
    long long int encrypted_text = 1;
    while (e--) {
        encrypted_text *= message;
        encrypted_text %= n;
    }
    return encrypted_text;
}

// Function to decrypt a given number
long long int decrypt(int encrypted_text) {
    int d = private_key;
    long long int decrypted = 1;
    while (d--) {
        decrypted *= encrypted_text;
        decrypted %= n;
    }
    return decrypted;
}

// Function to encode the message
vector<int> encoder(string message) {
    vector<int> form;
    for (auto &letter : message)
        form.push_back(encrypt((int)letter));
    return form;
}

// Function to decode the encoded message
string decoder(vector<int> encoded) {
    string s;
    for (auto &num : encoded)
        s += decrypt(num);
    return s;
}

// Function to read from a file, encrypt or decrypt based on choice, and overwrite the file content
void processFile(const string& filename, bool encryptMode) {
    ifstream infile(filename);
    if (!infile) {
        cout << "Error opening file!" << endl;
        return;
    }

    string content((istreambuf_iterator<char>(infile)),
                   (istreambuf_iterator<char>()));

    infile.close();

    vector<int> coded;
    if (encryptMode)
        coded = encoder(content);
    else
        coded = { content.begin(), content.end() };

    ofstream outfile(filename);
    if (!outfile) {
        cout << "Error opening file for writing!" << endl;
        return;
    }

    for (auto &p : coded)
        outfile << p;

    outfile.close();
}

int main() {
    primefiller();
    setkeys();

    int choice;
    string filename;
    bool continueProgram = true;

    while (continueProgram) {
        cout << "Choose operation:\n1. Encrypt\n2. Decrypt\n3. Exit\n";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter filename: ";
                cin >> filename;
                processFile(filename, true);
                cout << "Encryption completed successfully." << endl;
                break;
            case 2:
                cout << "Enter filename: ";
                cin >> filename;
                processFile(filename, false);
                cout << "Decryption completed successfully." << endl;
                break;
            case 3:
                continueProgram = false;
                break;
            default:
                cout << "Invalid choice!" << endl;
                break;
        }
    }

    return 0;
}
