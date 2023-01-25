import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import multer from 'multer';
import path from 'node:path';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/Orders/listOrders';
import { createOrder } from './app/useCases/Orders/createOrder';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/Orders/cancelOrder';


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
router.get('/products', listProducts);

// Create Product
router.post('/products', upload.single('imagePath'), createProduct);

// List Products by category
router.get('/categories/:categoryId/product',listProductsByCategory);

// List orders
router.get('/orders',listOrders);

// Create Order
router.post('/orders', createOrder);

// Change Order status
router.patch('/orders/:orderId',changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
