import { Router } from "express";
import { createProduct, deleteProduct, findAll, findProduct, updateProduct, findProductId } from "../controllers/products.controllers.js";
import { uploadImage } from "../middlewares/uploadImage.middlewares.js";

const router = Router()

router.get("/findProduct/:codigo", findProduct)
router.get("/findProductId/:id", findProductId)
router.get("/findAll", findAll)
router.post("/createProduct", uploadImage ,createProduct)
router.delete("/deleteProduct/:id", deleteProduct)
router.put("/updateProduct/:id",uploadImage, updateProduct)



export default router