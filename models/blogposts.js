const BlogPosts = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'users',
    });
  };

  return blogpost;
};

module.exports = BlogPosts;