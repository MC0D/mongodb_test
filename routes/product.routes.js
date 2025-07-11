import express from "express"
import { createProductController, getAllProductsController,getProductByIdController,updateProductByController,deleteProductByIdController } from "../products.module/products.controller.js"

const router =express.Router()
router.post('/', createProductController)
router.get('/', getAllProductsController)
router.get('/:id', getProductByIdController)

router.put('/:id', updateProductByController)
router.delete('/:id', deleteProductByIdController) 
  
export default router