const express = require('express')
const knex = require('knex');
const Models = require('./models-model');

const router = express.Router();

router.get('/', (req, res) => {
    Models.getAll()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
        res.status(500).json({message: 'unable to GET'})
    })
})

module.exports = router;

