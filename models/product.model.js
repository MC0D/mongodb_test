import mongoose from "mongoose";
const productSchema = new mongoose.Schema({ 
    product_name:{type: String},   
    product_name_lenght: { type: Number },
    product_description_lenght: { type: Number },
    product_photos_qty: { type: Number },
    product_weight_g: { type: Number },
    product_leght_cm: { type: Number },
    product_height_cm: { type: Number },
    product_width_cm: { type: Number },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
  }, {
    timestamps: true
  });
  
  const Product = mongoose.model("Product", productSchema);
  export default Product;