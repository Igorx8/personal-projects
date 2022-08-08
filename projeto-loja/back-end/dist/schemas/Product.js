"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('Product', ProductSchema);
//# sourceMappingURL=Product.js.map