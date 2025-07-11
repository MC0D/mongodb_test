import express from "express";
import {createStockController, getAllStocksController, getStockByIdController, updateStockController,  deleteStockController} from '../stock/stock.controller.js';

const router = express.Router();

router.post('/', createStockController);
router.get('/', getAllStocksController);
router.get('/:id', getStockByIdController);
router.put('/:id', updateStockController);
router.delete('/:id', deleteStockController);

export default router;