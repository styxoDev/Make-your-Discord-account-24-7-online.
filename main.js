/*
To get user token go to youtube and search.
Both Pc / Mobile ways are available.
*/
const app = require('./server.js');
const eris = require('eris');
const user = new eris(`${process.env.user || 'userToken'}`);
try {
user.connect().then(() => {
console.log('Successfully connected to your discord account')
});

} catch(err) {
  console.log(err)
}
