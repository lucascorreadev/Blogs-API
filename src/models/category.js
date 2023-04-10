/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

 module.exports = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
    });

    return CategoryTable;
}