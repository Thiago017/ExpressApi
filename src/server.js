const port = 3003;

const express = require('express');
const app = express();

// app.get('/products', (req, res, next) => {
//   console.log('Calling first middleware...');
//   next();
// });

app.get('/products', (req, res, next) => {
  res.send({
    name: 'Notebook',
    price: '$2599,99',
  })
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}.`)
});