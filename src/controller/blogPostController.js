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

module.exports = {
    insert,
    getAll,
};
