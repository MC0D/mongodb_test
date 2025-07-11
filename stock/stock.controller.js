import {createStock, getAllStocks,getStockById,updateStock,deleteStock}  from '../stock/stock.service.js';

 const createStockController = async (req, res) => {
  try {
    const stock = await StockService.createStock(req.body);
    res.status(201).json(stock);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

 const getAllStocksController = async (req, res) => {
  try {
    const stocks = await StockService.getAllStocks();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getStockByIdController = async (req, res) => {
  try {
    const stock = await StockService.getStockById(req.params.id);
    res.json(stock);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const updateStockController = async (req, res) => {
  try {
    const stock = await StockService.updateStock(req.params.id, req.body);
    res.json(stock);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

 const deleteStockController = async (req, res) => {
  try {
    await StockService.deleteStock(req.params.id);
    res.status(204).send(); 
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
export{createStockController,getAllStocksController,getStockByIdController,updateStockController,deleteStockController}