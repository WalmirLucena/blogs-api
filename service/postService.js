const { Op } = require('sequelize');
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

 const remove = async (id, userId) => {
   const findPost = await BlogPosts.findByPk(id);

   if (!findPost) return ({ code: 404, message: 'Post does not exist' });
      
   if (findPost.dataValues.userId !== userId) return ({ message: 'Unauthorized user' });

   const result = await BlogPosts.destroy({
      where: {
         id: Number(id),
      },
   });
   return result;
 };

 const search = async (q) => {
   const posts = await BlogPosts.findAll({ 
      where: { 
         [Op.or]: {
            title: {
               [Op.like]: `%${q}%`,
            },
            content: {
               [Op.like]: `%${q}%`,
            },
         },
      },
      include: [
         { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
         { model: Categorie, as: 'categories', through: { attributes: [] } }] });
  
     return posts;
 };

module.exports = { create,
getAll,
getById,
update, 
remove,
search };