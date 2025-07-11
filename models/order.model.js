import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    customer_id: {type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true},
    products: [{product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product',required: true},
        quantity: {type: Number, required: true, min: 1}}],
    totalPrice: {type: Number, required: true},
    order_status: {type: String,enum: ['pending', 'approved', 'paid', 'shipped', 'delivered', 'cancelled'],
      default: 'pending'},
    order_purchase_timestamp: {type: Date,default: Date.now},
    order_approved_at: { type: Date },
    order_delivered_carrier_date: {type: Date},
    order_delivered_customer_date: {type: Date},
    order_estimated_delivery_date: {type: Date}}, {timestamps: true });
  
  const Order = mongoose.model('Order', orderSchema);
  export default Order;