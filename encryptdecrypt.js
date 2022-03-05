//Checking the crypto module
const fs = require('fs');
var path = require('path');
const crypto = require('crypto');


var json_data = '{ "firstName": "John", "lastName": "Smith", "email": "johnsmith@dingapmail.com", "mobile": "02111111111", "gender": "male","dob": "1980-01-01", "postCode": "WC2N 5DU", "reqTime":"2021-12-23 11:40:55", }';
//Encrypting text
function RSA_Encrypt(str) {
   const publicKey = fs.readFileSync(path.resolve("./keys/public.pem"), "utf8");
   const buffer = Buffer.from(str);
   const encrypted = crypto.publicEncrypt({ key: publicKey, padding: 
   crypto.constants.RSA_PKCS1_PADDING }, buffer);
   return encrypted.toString("base64");
}

//Decrypting text
function RSA_Decrypt(str) {
   const privateKey = fs.readFileSync(path.resolve("./keys/private.pem"), "utf8");
   const buffer = Buffer.from(str, "base64");
   const decrypted = crypto.privateDecrypt({ key: privateKey, padding: 
   crypto.constants.RSA_PKCS1_PADDING }, buffer);
   return decrypted.toString("utf8");
}

//Raw JSon
// console.log(json_data);

// Text send to encrypt function
var hw = RSA_Encrypt(json_data)
console.log(hw);

// firstdat2=``

//Text after Decryption
console.log(RSA_Decrypt(hw))