const express = require('express');
//enviorment variable
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// uses middleware .static to allow easier access for js and css files that are for the public
app.use(express.static('public'));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// destructure'd the animals.json and grabbing the animals object only
// const { animals } = require('./data/animals.json');

// PORT
// .listen should ALWAYS BE LAST
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 