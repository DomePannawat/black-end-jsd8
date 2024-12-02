import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

/* This code snippet is defining routes for handling product-related operations in a Node.js
application using Express framework.  */
const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([{ name: "image1", maxCount: 1 }]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
