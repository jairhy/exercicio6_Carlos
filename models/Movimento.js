const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('movimento',{
    codMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('ENTRADA','SAIDA'),
        allowNull: false
    }

},{
    timestamps: false,
    tableName: 'movimentos'
})

module.exports = Movimento