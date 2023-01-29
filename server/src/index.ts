import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';
import path from 'node:path';
require('dotenv').config();

mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}`).then(() => {
  console.log('Conectado ao Banco de dados');

  const app = express();
  app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')));
  app.use(express.json());
  app.use(router);

  app.listen(process.env.SERVER_PORT);

}).catch(() => console.log('Não foi possível se conectar ao banco de dados'));
