const { Categorie } = require('../models');

const create = async (name) => {
    const categorie = await Categorie.create({ name });
    return categorie;
};

module.exports = {
    create,
};