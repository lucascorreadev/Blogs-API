const categoryService = require('../services/categoryService');

const insert = async (req, res) => {
    try {
    const { name } = req.body;
    const category = await categoryService.insert(name);
    return res.status(201).json(category);
} catch (err) {
    res.status(400).json({ message: err.message });
}
};

const getAll = async (req, res) => {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
};

module.exports = {
    insert,
    getAll,
};
