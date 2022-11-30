const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/recipeApp';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then( () => console.info('Connected to Mongo!') )
  .catch( err => console.error('Error connecting to mongo', err) );