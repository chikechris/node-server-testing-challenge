
exports.seed = function (knex) {
  return knex('makes').insert([
    { id: 1, make: 'Pegout' },
    { id: 2, make: 'Honda' },
    { id: 3, make: 'Ford' },
    { id: 4, make: 'Mercedes' },
    { id: 5, make: 'Lexus' },
    { id: 6, make: 'GMC' }
  ])
}

