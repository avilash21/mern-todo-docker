import express from "express";

import { createProduct, deleteAllProducts, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();




router.post("/", createProduct);
router.delete("/:id",deleteProduct)
router.get("/getall", getAllProducts);
router.put("/:id",updateProduct);
router.delete("/deleteall",deleteAllProducts);



export default router;