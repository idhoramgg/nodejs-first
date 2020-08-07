// chalk
// validator.js
const chalk = require('chalk');
const validator = require('validator')

const getUserData = (username, email) => {
   if(validator.isEmail(email)) {
       return `Selamat datang, ${chalk.green(username)} !`
   } else {
       return chalk.red(`${email} tidak valid`)
   }
}

module.exports = {
    getUserData
}