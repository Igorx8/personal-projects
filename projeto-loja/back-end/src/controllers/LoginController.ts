import { Request, Response } from 'express';

import User from '../schemas/User';

class LoginController {
  public index(req: Request, res: Response): void {
    console.log('Entrou no login');
    res.end();
    return;
  }
}

export default new LoginController();