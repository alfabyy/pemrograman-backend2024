const { index, store, update, destroy } = require('./FruitController');

const main = () => {
  console.log('Fruits List:', index());

  console.log('Updated Fruits List:', store('grape'));

  console.log('Updated Fruits List:', update(1, 'mango'));

  console.log('Updated Fruits List:', destroy(0));
};

main();