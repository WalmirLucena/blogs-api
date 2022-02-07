const Categorie = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, {
    tablename: 'Categories',
    timestamps: false,
  });

  return categorie;
};

module.exports = Categorie;