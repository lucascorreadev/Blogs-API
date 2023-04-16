const { BlogPost, User, Category } = require('../models');
const error = require('../utils/errors');

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

const findById = async (id) => {
    const post = await BlogPost.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
            {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          }],
    });

    if (!post) throw error(404, 'Post does not exist');

    return post;
};

module.exports = {
    insert,
    getAll,
    findById,
};
