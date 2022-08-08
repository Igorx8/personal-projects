import { Schema, model, Document } from 'mongoose';

interface ProductInterface extends Document {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
},
  {
    timestamps: true,
  });

export default model<ProductInterface>('Product', ProductSchema);