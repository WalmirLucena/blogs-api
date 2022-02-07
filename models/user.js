const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tablename: 'Users',
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.blogspost, {
      foreignKey: 'userId', as: 'blogPosts',
    });
  };

  return user;
};

module.exports = User;