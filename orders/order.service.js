import Order from "./orders.modele.js"; 
const createOrder = async(orderData)=>{
    const newOrder =new Order(orderData)
    return await newOrder.save()
}
export{ createOrder}