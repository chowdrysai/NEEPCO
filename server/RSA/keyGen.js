const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const generateKey = () => {
    const dir = './RSA'; 
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir); // Create the directory if it doesn't exist
    }

    const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });

    fs.writeFileSync(path.join(dir, 'public_key.pem'), publicKey);
    fs.writeFileSync(path.join(dir, 'private_key.pem'), privateKey);
}

module.exports = { generateKey };
