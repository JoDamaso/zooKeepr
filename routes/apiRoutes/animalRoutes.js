//imports 
const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');

// changed app. to router. because we can't use app in this js
// router is in use rather 

// add route for animals
router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});
// route for id
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
});
// users send data from client side of application to server
router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in ther req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is now properly formatted!');
    } else {
    // add animal to json file and animals array in this function 
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
    }
});

module.exports = router;