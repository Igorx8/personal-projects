import { Request, Response } from 'express';

import Product from '../schemas/Product';

class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const products = await Product.find();

    return res.json(products);
  }
}

export default new ProductController();