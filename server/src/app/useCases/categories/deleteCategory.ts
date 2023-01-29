import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req: Request,res: Response){
  try {
    const {
      categoryId
    } = req.params;

    const existsCategory = await Category.findById(categoryId);
    if(!existsCategory) return res.status(404).json({error: 'Category doesn\'t exists'});

    const categoryDeleted = await Category.findByIdAndDelete(categoryId);
    return res.json({category: categoryDeleted, deleted: true});
  }catch(error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
