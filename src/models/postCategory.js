/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

 module.exports = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
        post_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
    });

    return PostCategoryTable;
}