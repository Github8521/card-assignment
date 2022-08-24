const mongoose = require('mongoose');

main().then(() => {
  console.log('connection is successful');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/card-api');
}