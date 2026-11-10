const Fornecedor = require('../models/Fornecedor')
const Funcionario = require('../models/Funcionario')
const Movimento = require('../models/Movimento')
const Produto = require('../models/Produto')

Fornecedor.hasMany(Funcionario,{
    foreignKey: 'idFuncionario',
    as: 'funcionarioFornecedor',
    onDelete: 'CASCADE'
})

Funcionario.belongsTo(Fornecedor,{
    foreignKey: 'idFuncionario',
    as: 'fornecedorFuncionario',
    allowNull: false
})

Fornecedor.hasMany(Movimento,{
    foreignKey: 'idMovimento',
    as: 'movimentoFornecedor',
    onDelete: 'CASCADE'
})

Movimento.belongsTo(Fornecedor,{
    foreignKey: 'idMovimento',
    as: 'fornecedorMovimento',
    allowNull: false
})

Fornecedor.hasMany(Produto,{
    foreignKey: 'idProduto',
    as: 'produtoFornecedor',
     onDelete: 'CASCADE'
})

Produto.belongsTo(Fornecedor,{
    foreignKey: 'idProduto',
    as: 'fornecedorProduto',
      allowNull: false
})

module.exports = { Fornecedor, Funcionario, Produto, Movimento }
