import express from 'express';
import cors from 'cors';
import csrf from 'csurf';
import { tokenValidate } from './middlewares/validate';
import { sessionOptions } from './config/session';
import mongoose from 'mongoose';
import routes from './routes';


class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(sessionOptions);
    this.express.use(csrf());
    this.express.use(tokenValidate);
  }

  private async database(): Promise<void> {
    await mongoose.connect('mongodb://root:example@127.0.0.1:27017/api?authSource=admin').then(() => this.express.emit('Conectou')).catch((e) => console.log(e));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;