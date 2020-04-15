
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('models').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('models').insert([
        {images: 'fakeurl.com', name: 'This is a toy', price: 2.99, description: 'Red Car'},
        {images: 'fakeurl.com', name: 'This is another toy', price: 3.99, description: 'Blue Car'},
        {images: 'fakeurl.com', name: 'This is yet another toy', price: 4.99, description: 'White Car'}
      ]);
    });
};
