// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

// Tags belongToMany Products (through ProductTag) 
Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
