import Stock from '../models/stock.model.js';

 const createStock = async (stockData) => {
 
  const existing = await Stock.findOne({ product_id: stockData.product_id });
  if (existing) {
    throw new Error('Un stock pour ce produit existe déjà');
  }

  const stock = new Stock(stockData);
  return await stock.save();
};

 const getAllStocks = async () => {
  return await Stock.find().populate('product_id').populate('category_id');
};

 const getStockById = async (id) => {
  const stock = await Stock.findById(id).populate('product_id').populate('category_id');
  if (!stock) throw new Error('Stock non trouvé');
  return stock;
};
 const updateStock = async (id, updateData) => {
  const stock = await Stock.findByIdAndUpdate(id, updateData, { new: true });
  if (!stock) throw new Error('Stock non trouvé');
  return stock;
};

 const deleteStock = async (id) => {
  const stock = await Stock.findByIdAndDelete(id);
  if (!stock) throw new Error('Stock non trouvé');
  return stock;
};

export {createStock,getAllStocks,getStockById,updateStock,deleteStock}