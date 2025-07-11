import { createOrder } from "./orders.service.js";
const createOrderController = async (req, res)=>{
    try{
        const order = await createOrder(req.body);
        res.status(201).json({message: "Order enregistre", order})
    } catch (error){
        console.error("Erreur los de la creation:", error);
        res.status(500).json({error: "Erreur serveur"})
    }
}

const getAllOrdersController = async (req, res) => {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getOrderByIdController = async (req, res) => {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.json(order);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };
  
   const updateOrderStatusController = async (req, res) => {
    try {
      const updated = await OrderService.updateOrderStatus(req.params.id, req.body.order_status);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const deleteOrderController = async (req, res) => {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };


export {createOrderController, getAllOrdersController,getOrderByIdController,updateOrderStatusController,deleteOrderController}