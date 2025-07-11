import Product from "./products.modele.js";
const createProduct = async (productData) =>{
    const newProduct = new Product(productData)
    return await newProduct.save()
}
const getAllProducts = async() => {return await Product.find().populate("category_id")}
const getProductById = async(id) => {
    return await Product.findById(id).populate("category_id")
}
const updateProductById = async (id, updataData)=>{
    return await Product.findByIdAndUpdate(id, updataData, {new: true})
}

const deleteProductById = async (id) =>{
    return await Product.findByIdAndDelete(id)
}





export{createProduct, getAllProducts,getProductById,updateProductById,deleteProductById}