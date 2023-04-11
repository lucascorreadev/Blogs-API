/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

 module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts'
    });

    return BlogPost;
}