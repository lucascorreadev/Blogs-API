const blogPostService = require('../services/blogPostService');

const insert = async (req, res) => {
    try {
    const result = await blogPostService.insert(req.body);
    return res.status(201).json(result);
} catch (err) {
    return res.status(400).json({ message: err.message });
}
};

const getAll = async (req, res) => {
    const result = await blogPostService.getAll();
    return res.status(200).json(result);
};

const findById = async (req, res) => {
    try {
    const { id } = req.params;
    const result = await blogPostService.findById(id);
    return res.status(200).json(result);
    } catch (err) {
    return res.status(404).json({ message: err.message });
    }
};

module.exports = {
    insert,
    getAll,
    findById,
};
