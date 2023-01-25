import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import multer from 'multer';
import path from 'node:path';


export const router = Router();

// Configuração do armazenamento na máquina
const upload = multer({
  storage: multer.diskStorage({
    // Pasta que salvará os arquivos
    destination(req,file,callback){
      callback(null,path.resolve(__dirname, '..' ,'uploads'));
    },
    filename(req,file,callback){
      callback(null,`${Date.now()}-${file.originalname}`);
    }
  })
});

// List categories
router.get('/categories',listCategories);

// Create category
router.post('/categories', createCategory);

// Delete category
router.delete('/categories/:categoryId', deleteCategory);

// List Products
router.get('/products', (req,res) => {
  res.send('OK');
});

// Create Product
router.post('/products', upload.single('imagePath'), createProduct);

// List Products by category
router.get('/categories/:categoryId/product',(req,res) => {
  res.send('OK');
});

// List orders
router.get('/orders',(req,res) => {
  res.send('OK');
});

// Create Order
router.post('/orders',(req,res) => {
  res.send('OK');
});
// Change Order status
router.patch('/orders/:orderId',(req,res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req,res) => {
  res.send('OK');
});
