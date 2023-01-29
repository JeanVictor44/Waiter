import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response){
  const {
    categoryId
  } = req.params;
  try {
    const productsByCategory = await Product.find().where('category').equals(categoryId);
    res.json(productsByCategory);
  }catch(error) {
    res.sendStatus(500);
    console.log(error);
  }
}
