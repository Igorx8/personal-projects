import { Router } from "express";

import LoginController from "./controllers/LoginController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.get("/product/list", ProductController.index);

routes.get('/login', LoginController.index);

export default routes;
