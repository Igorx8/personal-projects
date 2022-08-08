"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("./controllers/ProductController"));
const routes = (0, express_1.Router)();
routes.get("/product/list", ProductController_1.default.index);
exports.default = routes;
//# sourceMappingURL=routes.js.map