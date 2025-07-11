import Order from "../models/order.model.js"; 
import User from "../models/user.model.js";
import Product from "../models/product.model.js";


const createOrder = async (orderData) => {
    const { customer_id, products, totalPrice } = orderData;
  
    
    const userExists = await User.findById(customer_id);
    if (!userExists) {
      throw new Error('Utilisateur non trouvé');
    }
  
   
    for (const item of products) {
      const productExists = await Product.findById(item.product);
      if (!productExists) {
        throw new Error(`Produit non trouvé : ${item.product}`);
      }
    }
  
    
    const newOrder = new Order({
      customer_id,
      products,
      totalPrice,
      order_status: 'pending',
    });
  
    return await newOrder.save();
  };

  const getAllOrders = async () => {
    return await Order.find()
      .populate('customer_id') 
      .populate('products.product');
  };
  
  const getOrderById = async (id) => {
    const order = await Order.findById(id)
      .populate('customer_id')
      .populate('products.product');
      
    if (!order) {
      throw new Error('Commande introuvable');
    }
  
    return order;
  };
  
  const updateOrderStatus = async (id, status) => {
    const order = await Order.findByIdAndUpdate(id, { order_status: status }, { new: true });
    if (!order) {
      throw new Error('Commande introuvable');
    }
    return order;
  };
  
  const deleteOrder = async (id) => {
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      throw new Error('Commande introuvable');
    }
    return order;
  };








export{ createOrder, getAllOrders,getOrderById,updateOrderStatus,deleteOrder}