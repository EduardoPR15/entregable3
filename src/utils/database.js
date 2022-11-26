
const {Sequelize} = require('sequelize')


const db = new Sequelize({
dialect: 'postgres',
host:'localhost',
port: '5432',//o 5433
username:'postgres',
password:'12345',
database:'users'
})



module.exports = db