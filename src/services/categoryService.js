const { Category } = require('../models');
const err = require('../utils/errors');

const insert = async (name) => {
    if (!name) throw err(400, '"name" is required');

    const insertion = await Category.create({ name });

    return insertion;
};

module.exports = {
    insert,
};
