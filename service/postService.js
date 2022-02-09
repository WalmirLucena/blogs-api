const { BlogPosts, User, Categorie } = require('../models');

const create = async (newPost) => {
    const post = await BlogPosts.create(newPost);
    const { dataValues } = post;
    return dataValues;
};

const getAll = async () => {
    const posts = await BlogPosts.findAll({ 
     include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Categorie, as: 'categories', through: { attributes: [] } }] });
 
    return posts;
 };

module.exports = { create,
getAll };