const { Categorie } = require('../models');

const create = async (name) => {
    const categorie = await Categorie.create({ name });
    return categorie;
};

const getAll = async () => {
    const users = await Categorie.findAll();
 
    return users;
 };

module.exports = {
    create,
    getAll,
};