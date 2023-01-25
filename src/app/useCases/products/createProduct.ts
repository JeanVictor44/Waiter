import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request,res: Response){
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price:Number(price),
      category,
      imagePath,
      ingredients: JSON.parse(ingredients)
    });
    res.json(product);
  }catch(error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
