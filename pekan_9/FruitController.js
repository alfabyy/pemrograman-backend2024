const { fruits } = require('./data');

const index = () => {
  console.log('Menampilkan buah:', fruits);
  return fruits;
};

const store = (newFruit) => {
  console.log(`Menambah buah ${newFruit}...`);  
  fruits.push(newFruit);
  return fruits;
};

const update = (index, newFruit) => {
  if (index < 0 || index >= fruits.length) {
    return `Error: Index ${index} tidak valid.`;
  }
  console.log(`Update data ${index} menjadi ${newFruit}...`);
  fruits[index] = newFruit;
  return fruits;
};

const destroy = (index) => {
  if (index < 0 || index >= fruits.length) {
    return `Error: Index ${index} tidak valid.`;
  }
  console.log(`Menghapus data index ${index}...`);  
  fruits.splice(index, 1); 
  return fruits;
};

module.exports = { index, store, update, destroy };