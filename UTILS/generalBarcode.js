const {randomBytes} = require('crypto');

const generateBarcode = () => {
    return randomBytes(4).toString('hex').toUpperCase();
};

module.exports = generateBarcode;

// 123.toString()

// const num="123"

// console.log(Number(num))


// //"abcd"="ABCD"
// const str="abcd"
// console.log(str.toUpperCase())
