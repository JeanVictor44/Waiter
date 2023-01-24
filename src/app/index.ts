import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}`).then(() => {
  console.log('Conectado ao Banco de dados');

  const app = express();
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World');
  });
  app.listen(3001);

}).catch(() => console.log('Não foi possível se conectar ao banco de dados'));
