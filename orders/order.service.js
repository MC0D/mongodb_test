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

export{ createOrder}