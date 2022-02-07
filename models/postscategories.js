const PostsCategorie = (sequelize, _DataTypes) => {
  const postsCategorie = sequelize.define('PostsCategorie', 
  {}, { tableName: 'PostsCategories', timestamps: false });

  postsCategorie.associate = (models) => {
    models.Categorie.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: postsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPosts.belongsToMany(models.Categorie, {
      as: 'categories',
      through: postsCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postsCategorie;
};

module.exports = PostsCategorie;