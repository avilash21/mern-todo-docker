import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(401).json({ success: false, message: "Please provide all fields", product: product });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(200).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Creating Product: ", error);
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
};

export const getAllProducts = async(req,res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json({status:true, data:products});    
    } catch (error) {
        console.log("Error in fetching Products: ",error.message);
        res.send(500).json({success:false, message:"Server Error. Unable to get products"})
    }
    
};

export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product is deleted"})
    } catch (error) {
        res.status(404).json({success:false, message:"Product is not found"})
    }
    console.log(id);
};

export const updateProduct = async (req,res)=>{
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product ID"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true, message:"Product Updated", data:updatedProduct});
    } catch (error) {
        console.log("Error in Updating Product: ",error.message);
        res.status(500).json({success:false, message:"Server Error. Unable to update product"})
    }
};

export const deleteAllProducts = async (req,res) => {    
    try {
        const answers = await Product.deleteMany();
        res.status(200).json({ success:true, message: 'Product has been deleted', answer:answers });
    } catch (error) {
        res.status(500).json({ success:false, error: 'Internal server error' });
    }
};