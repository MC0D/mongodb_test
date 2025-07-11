import { createProduct, getAllProducts,getProductById,updateProductById,deleteProductById } from "./products.service.js";
const createProductController = async (req, res)=>{
    try{
        const product = await createProduct(req.body);
        res.status(201).json({message: "Produit enregistre", product})
    } catch (error){
        console.error("Erreur los de la creation:", error);
        res.status(500).json({error: "Erreur serveur"})
    }
}
const getAllProductsController = async (req, res) => {
    try{
        const product = await getAllProducts()
        res.status(200).json(product)        
    } catch (error){
        console.error("Erreur en recuperant les utilisateurs:",error)
    res.status(500).json({error: "Erreur serveur"})
    }
}

const getProductByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await getProductById(id);
  
      if (!product) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }
  
      res.status(200).json(product);
    } catch (error) {
      console.error("Erreur lors de la récupération de produit :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  };  









const updateProductByController = async (req, res) =>{
    try{
        const {id} = req.params;
        const updataData =req.body
        const updateProduit = await updateProductById(id, updataData);
        if(!updateProduit){
            return res.status(404).json({ message: "Produit non Trouve"})
        }
        res.status(200).json({message: "Produit mis a jour", pproduit: updateProduit})
    } catch(error){
        console.error("Erreur losr de la mise a jour", error)
        res.status(500).json({error: "Erreur serveur"})
    }
}

const deleteProductByIdController = async (req, res) => {
        try {
          const { id } = req.params;
      
          const deletedProduct = await deleteProductById(id);
      
          if (!deletedProduct) {
            return res.status(404).json({ message: "Produit non trouvé" });
          }
      
          res.status(200).json({ message: "Produit supprimé", product: deletedProduct });
        } catch (error) {
          console.error("Erreur lors de la suppression :", error);
          res.status(500).json({ error: "Erreur serveur" });
        }
      };






export{createProductController, getAllProductsController,getProductByIdController,updateProductByController,deleteProductByIdController}