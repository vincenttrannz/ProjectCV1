
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, name: 'Vincent', email: 'tranhieunz@gmail.com', text: 'test'},
        {id: 2, name: 'Christine', email: 'phuongnguyen140889@gmail.com', text: 'hello'}
      ]);
    });
};
