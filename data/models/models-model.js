const db = require('../models/db.config')

function getAll() {
    return db('models');
}
function addModel(model) {
    return db('models')
    .insert(item)
    .returning('*')

}

module.exports = {getAll, addModel }