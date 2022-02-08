const { BlogPosts } = require('../models');

const create = async (newPost) => {
    const post = await BlogPosts.create(newPost);
    const { dataValues } = post;
    return dataValues;
};

module.exports = { create };