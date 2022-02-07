const PostsCategorie = (sequelize, _DataTypes) => {
  const postsCategorie = sequelize.define('PostsCategorie', 
  {}, { tableName: 'PostsCategories', timestamps: false });

  postsCategorie.associate = (models) => {
    models.categorie.belongsToMany(models.blogposts, {
      as: 'BlogPosts',
      through: postsCategorie,
      foreignKey: 'id',
      otherKey: 'id',
    });

    models.blogpost.belongsToMany(models.categorie, {
      as: 'Categories',
      through: postsCategorie,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return postsCategorie;
};

module.exports = PostsCategorie;