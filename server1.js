//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

console.log(`Your port is ${process.env.PORT}`); 
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`);