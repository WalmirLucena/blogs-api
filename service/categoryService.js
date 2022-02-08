const { Categorie } = require('../models');

const create = async (name) => {
    const categorie = await Categorie.create({ name });
    return categorie;
};

const getAll = async () => {
    const users = await Categorie.findAll();
 
    return users;
 };

const findCategories = async (categories) => {
    const getCategory = await Categorie.findAll({ where: { id: categories } });

    const allCategory = getCategory.map((categorie) => ({ ...categorie.dataValues }));
    
    const existId = categories.filter((catId) => allCategory.some((cat) => cat.id === catId));

    if (existId.length === categories.length) return true;

    return false;
};

module.exports = {
    create,
    getAll,
    findCategories,
};
