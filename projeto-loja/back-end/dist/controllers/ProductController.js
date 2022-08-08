"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../schemas/Product"));
class ProductController {
    async index(req, res) {
        const products = await Product_1.default.find();
        return res.json(products);
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map