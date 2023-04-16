const { BlogPost, User, Category } = require('../models');

const insert = async ({ title, content }) => {
    console.log({ title, content });
    const create = await BlogPost.create({ title, content });
    return create;
};

const getAll = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category,
              as: 'categories',
              through: { attributes: [] },
            },
          ],
    });
    return blogPosts;
};

module.exports = {
    insert,
    getAll,
};
