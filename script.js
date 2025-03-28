const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Replace with your actual secret key

const encrypt = (payload) => {
  // Encrypt the payload and return token
  return jwt.sign(payload, secretKey);
}

const decrypt = (token) => {
  // Return decoded payload
  return jwt.verify(token, secretKey);
}

// Test cases
const testPayload = { userId: 1, username: 'testUser' };
const token = encrypt(testPayload);
console.log('Generated Token:', token);

const decodedPayload = decrypt(token);
console.log('Decoded Payload:', decodedPayload);

module.exports = {
  encrypt,
  decrypt
}
