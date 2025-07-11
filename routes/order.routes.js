import express from "express"
import { createOrderController } from "../orders.module/orders.controller.js";
const router = express.Router()
router.post('/',createOrderController) 


export default router