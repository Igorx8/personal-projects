import { Request, Response, NextFunction } from 'express';

export const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.session?.csrfSecret);
  next();
}