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
export {createOrderController}