const InterstitalEncryptor = require('../index.js');

// Example usage of the InterstitalEncryptor

function main() {
    // Replace these with actual values
    const cid = 'your-datadome-cookie';
    const hash = 'your-website-hash';
    const seed = 4046101435; // Optional, default is 4046101435

    // Create an instance of InterstitalEncryptor
    const encryptor = new InterstitalEncryptor(cid, hash, seed);

    // Example data to be encrypted
    const data = [
        ['signal1', 'value1'],
        ['signal2', 'value2'],
        ['signal3', 'value3']
    ];

    // Encrypt the data
    const encryptedPayload = encryptor.encrypt(data);

    // Display the encrypted payload
    console.log('Encrypted Payload:', encryptedPayload);

    // Get the current signals
    const currentSignals = encryptor.getSignals();
    console.log('Current Signals:', currentSignals);
}

main();
