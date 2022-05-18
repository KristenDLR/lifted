const User = require('./User');
const Post = require('./Post');

// create association: 1 User Many Posts
//To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
  

module.exports = { User, Post };