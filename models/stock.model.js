import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  product_id: {type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    unique: true},
  category_id: {type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true},
  name: {type: String,required: true},
  price: {type: Number,required: true, min: 0},
  information: {type: String},
  product_image: {type: String},
  quantity: { type: Number, required: true,min: 0}}, {
  timestamps: true});

const Stock = mongoose.model('Stock', stockSchema);
export default Stock;