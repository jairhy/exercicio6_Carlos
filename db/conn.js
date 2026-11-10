const { Sequelize } = require('sequelize')

const db = new Sequelize('db_fornecedor','root','senai',{
    dialect: 'mysql',
    PORT: 3306,
    host: 'localhost'
})

module.exports = db