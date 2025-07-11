import express from "express"
import { createOrderController,getAllOrdersController,getOrderByIdController,updateOrderStatusController,deleteOrderController } from "../orders/order.controller.js";
const router = express.Router()
router.post('/',createOrderController) 
router.get('/', getAllOrdersController);
router.get('/:id', getOrderByIdController);
router.put('/:id/status', updateOrderStatusController);
router.delete('/:id', deleteOrderController);

export default router