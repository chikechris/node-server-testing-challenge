
exports.seed = function (knex) {
  return knex('models').insert([
    { id: 1, model: '406' },
    { id: 2, model: 'Accord' },
    { id: 3, model: 'Tacoma' },
    { id: 4, model: 'Camry' },
    { id: 5, model: 'C200' },
    { id: 6, model: 'GS-300' },
    { id: 7, model: '505' },
    { id: 8, model: 'Expedition' },
    { id: 9, model: 'Odessey' }
  ])
}

