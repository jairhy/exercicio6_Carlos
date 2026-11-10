const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Fornecedor = db.define('fornecedor',{
    codFornecedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    codMovimento: {
        type: DataTypes.INTEGER,
        references: {
            key: 'idMovimento',
            model: 'movimentos'
        },
    },
    codProduto: {
        type: DataTypes.INTEGER,
        references: {
            key: 'idProduto',
            model: 'produtos'
        },
    },
    codFuncionario: {
        type: DataTypes.INTEGER,
        references: {
            key: 'idFuncionario',
            model: 'funcionarios'
        },
    },

},{
    timestamps: false,
    tableName: 'fornecedores'
})

module.exports = Fornecedor

