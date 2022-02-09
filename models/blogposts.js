const BlogPosts = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };

  return blogpost;
};

module.exports = BlogPosts;