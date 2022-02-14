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

 const getById = async (id) => {
    const posts = await BlogPosts.findByPk(id, { 
     include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Categorie, as: 'categories', through: { attributes: [] } }] });
 
    return posts;
 };

 const update = async (title, content, id, userId) => {
      const findPost = await BlogPosts.findByPk(id);
      
   if (findPost.dataValues.userId !== userId) return ({ message: 'Unauthorized user' });

    await BlogPosts.update({ title, content }, {
      where: { id: Number(id),
      },
    });
   
    const findNewPost = await BlogPosts.findByPk(id, {
      include: [
         { model: Categorie, as: 'categories', through: { attributes: [] } }] });
   
    return { title, content, userId: findNewPost.id, categories: findNewPost.categories };
 };

module.exports = { create,
getAll,
getById,
update };