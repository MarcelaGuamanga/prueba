/* eslint-disable prettier/prettier */
const express = require('express');
const app = express();
const port = 8080;

if (require.main === module) {
  app.listen(() => console.log(`listening on port ${port}`));
}

//2. Se crea lo minimo para que el test pase, en este paso el post 
//y que retorne un estatus 201 junto con los datos(name, descripcion,
//precio,id) en json
app.use(express.json())

app.post('/products', (req, res) => {
  const { name, description, price } = req.body

  const _id = 'abc'

  res.status(201).json({
    name,
    description,
    price,
    _id,
  })
})

  
module.exports.app = app;

